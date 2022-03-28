import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profile'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ProfileDetail from './pages/ProfileDetail/ProfileDetail'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import AddDatePlan from './components/AddDatePlan/AddDatePlan'
import * as datePlanService from './services/datePlan'
import EditDatePlan from './components/EditDatePlan/EditDateplan'



const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [profiles, setProfiles] = useState([])
  const [proIdx, setProIdx] = useState(0)
  const [datePlans, setDatePlans] = useState([])
  
  function handleClick(idx){
    setProIdx(idx)
  }
  useEffect(()=> {
    user && profileService.getAllProfiles()
      .then(profiles => setProfiles(profiles))
  }, [user])

  useEffect(() => {
    datePlanService.getAllDatePlans() 
    .then(datePlans => setDatePlans(datePlans))
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddDatePlan = async newDatePlanData => {
    const newDatePlan = await datePlanService.create(newDatePlanData)
    setDatePlans([...datePlans, newDatePlan])
  }

  const handleEditDatePlan = updatedDatePlan => {
    datePlanService.update(updatedDatePlan)
    .then(updatedDatePlan => {
      const newDatePlanArray = datePlans.map(datePlan => 
        datePlan._id === updatedDatePlan._id ? updatedDatePlan : datePlan
      )
      setDatePlans(newDatePlanArray)
    })
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            user ? (
              <Profiles profiles={profiles} handleClick={handleClick} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profiledetail"
          element={<ProfileDetail profiles={profiles} proIdx={proIdx} datePlans={datePlans}/>}
        />

        <Route
          path="/new"
          element={
            user ? <AddDatePlan user={user} handleAddDatePlan={handleAddDatePlan} datePlans={datePlans}/> : <Navigate to="/signin" />
          }
        />
        <Route
        path="/edit"
        element={ user ? <EditDatePlan user={user} handleEditDatePlan={handleEditDatePlan}/> : <Navigate to="/signin" /> }
        />
      </Routes>
    </>
  );
}

export default App
