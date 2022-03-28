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
import * as IcebreakersService from './services/icebreaker'
import EditDatePlan from './components/EditDatePlan/EditDateplan'
import ShowDateplan from './pages/ShowDateplan/ShowDateplan'
import Icebreakers from './pages/Icebreakers/Icebreakers'
import AddIceBreaker from './components/AddIceBreaker/AddIceBreaker'



const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [profiles, setProfiles] = useState([])
  const [proIdx, setProIdx] = useState(0)
  const [datePlans, setDatePlans] = useState([])
  const [iceBreakers, setIceBreakers] = useState([])
  
  function handleClick(idx){
    setProIdx(idx)
  }
  useEffect(()=> {
    user && profileService.getAllProfiles()
      .then(profiles => setProfiles(profiles))
  }, [user])

  // console.log(user)

  useEffect(() => {
    datePlanService.getAllDatePlans() 
    .then(datePlans => setDatePlans(datePlans))
  }, [])

  useEffect(() => {
    IcebreakersService.getAllIceBreakers() 
    .then(iceBreakers => setIceBreakers(iceBreakers))
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
    navigate('/profiledetail')
  }

  const handleEditDatePlan = updatedDatePlan => {
    datePlanService.update(updatedDatePlan)
    .then(updatedDatePlan => {
      const newDatePlanArray = datePlans.map(datePlan => 
        datePlan._id === updatedDatePlan._id ? updatedDatePlan : datePlan
      )
      setDatePlans(newDatePlanArray)
      navigate('/profiledetail')
    })
  }

  const handleDeleteDatePlan = id => {
    datePlanService.deleteOne(id) 
    .then(deleteDatePlan => setDatePlans(datePlans.filter(datePlan => datePlan._id !== deleteDatePlan._id)))
  }

  const handleAddIceBreaker = async newIceBreaker => {
    const IceBreaker = await IcebreakersService.create(newIceBreaker)
    setDatePlans([...iceBreakers, IceBreaker])
    navigate('/profiledetail')
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
          path="/icebreakers"
          element={
            user ? (
              <Icebreakers profiles={profiles} handleClick={handleClick} />
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
          element={<ProfileDetail profiles={profiles} proIdx={proIdx} datePlans={datePlans} user={user} handleDeleteDatePlan={handleDeleteDatePlan}/>}
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
        <Route
        path="/dateplans/:id"
        element={ user ? <ShowDateplan user={user} datePlans={datePlans} handleEditDatePlan={handleEditDatePlan}/> : <Navigate to="/signin" /> }
        />
        <Route
        path="/addicebreaker"
        element={ user ? <AddIceBreaker user={user} handleAddIceBreaker={handleAddIceBreaker}/> : <Navigate to="/signin" /> }
        />
      </Routes>
      
    </>
  );
}

export default App
