import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import AddDatePlan from './components/AddDatePlan/AddDatePlan'
import * as datePlanService from './services/datePlan'
import * as IcebreakersService from './services/icebreaker'
import EditDatePlan from './components/EditDatePlan/EditDateplan'
import ShowDateplan from './pages/ShowDateplan/ShowDateplan'
import Icebreakers from './pages/Icebreakers/Icebreakers'
import AddIceBreaker from './components/AddIceBreaker/AddIceBreaker'
import ShowProfile from './pages/ShowProfile/ShowProfile'
import Attraction from './components/Attraction/Attraction'
import EditProfile from './components/EditProfile/EditProfile'
import Menu from './components/Menu/Menu'




const App = () => {
  const [menuOpen,setMenuOpen] = useState(true)

  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [profiles, setProfiles] = useState([])
  const [proIdx, setProIdx] = useState(0)
  const [datePlans, setDatePlans] = useState([])
  const [iceBreakers, setIceBreakers] = useState([])
  
  
  function handleClick(idx){
    setProIdx(idx)
  }


  function findProfileIndex (id) {
    let profileIndex 
    profiles.forEach((profile, idx) => {
      if(profile._id === id) {
      profileIndex = idx
      }
    });
    setProIdx(profileIndex)
  }

  useEffect(()=> {
    user && profileService.getAllProfiles()
      .then(profiles => setProfiles(profiles))
  }, [user])

  // console.log(user)

  useEffect(() => {
    user && datePlanService.getAllDatePlans() 
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
    console.log('newDatePlanData: ', newDatePlanData)
    const newDatePlan = await datePlanService.create(newDatePlanData, user.profile)
    setDatePlans([...datePlans, newDatePlan])
    navigate(`/profiles/${profiles[proIdx]._id}`)
  }

  const handleEditDatePlan = updatedDatePlan => {
    // console.log('User: ', user, " ", "Profile", profiles)
    datePlanService.update(updatedDatePlan)
    .then(updatedDatePlan => {
      const newDatePlanArray = datePlans.map(datePlan => 
        datePlan._id === updatedDatePlan._id ? updatedDatePlan : datePlan
      )
      setDatePlans(newDatePlanArray)
      navigate(`/profiles/${profiles[proIdx]._id}`)
    })
  }

  const handleDeleteDatePlan = id => {
    datePlanService.deleteOne(id) 
    .then(deleteDatePlan => {
      setDatePlans(datePlans.filter(datePlan => datePlan._id !== deleteDatePlan._id))
      navigate(`/profiles/${profiles[proIdx]._id}`)
    })
  }

  const handleDeleteIceBreaker = id => {
    IcebreakersService.deleteOne(id) 
    const updatedIceBreakers =  iceBreakers.filter(iceBreaker => iceBreaker._id !== id)
    setIceBreakers(updatedIceBreakers)
  }

  const handleAddIceBreaker = async newIceBreaker => {
    const iceBreaker = await IcebreakersService.create(newIceBreaker)
    console.log(iceBreaker);
    setIceBreakers([...iceBreakers, iceBreaker])
    navigate('/icebreakers')
  }

  const handleEditProfile = async updatedProfile => {
    console.log('updatedProfile data : ', updatedProfile)
    profileService.update(updatedProfile, user.profile)
    .then(updatedProfile => {
      console.log(updatedProfile)
      const newProfileArray = profiles.map(profile => 
        profile._id === updatedProfile._id ? updatedProfile : profile
      )
      setProfiles(newProfileArray)
      navigate(`/profiles/${profiles[proIdx]._id}`)
  })
}


  return (
    <>
      <NavBar user={user} menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleLogout={handleLogout} />
      <Menu user={user} menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleLogout={handleLogout} />

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
              <Profiles profiles={profiles} handleClick={handleClick} datePlans={datePlans} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/icebreakers"
          element={
            user ? (
              <Icebreakers profiles={profiles} user={user} handleClick={handleClick} iceBreakers={iceBreakers} handleDeleteIceBreaker={handleDeleteIceBreaker}/>
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
          path="/profiles/:id"
          element={<ShowProfile profiles={profiles} proIdx={proIdx} datePlans={datePlans} user={user} handleDeleteDatePlan={handleDeleteDatePlan} findProfileIndex={findProfileIndex}/>}
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
        element={ user ? <AddIceBreaker user={user} handleAddIceBreaker={handleAddIceBreaker} /> : <Navigate to="/signin" /> }
        />
        <Route
        path="/attractions"
        element={ user ? <Attraction /> : <Navigate to="/signin"/>}
        />
        <Route
        path='/editprofile'
        element={user? <EditProfile handleEditProfile={handleEditProfile}/> : <Navigate to="/signin" />}
        />
      </Routes>
      
    </>
  );
}

export default App
