import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profile'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import MyProfile from './pages/ProfileDetail/ProfileDetail'
import ProfileDetail from './pages/ProfileDetail/ProfileDetail'
import * as authService from './services/authService'
import * as profileService from './services/profileService'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [profiles, setProfiles] = useState([])
  const [proIdx, setProIdx] = useState(0)
  
  function handleClick(idx){
    setProIdx(idx)
  }
  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
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
          element={user ? <Profiles profiles={profiles} handleClick={handleClick}/> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route
          path="/profiledetail"
          element={<ProfileDetail profiles={profiles} proIdx={proIdx}/>}
        />
      </Routes>
    </>
  )
}

export default App
