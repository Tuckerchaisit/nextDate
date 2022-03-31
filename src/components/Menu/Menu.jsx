import { Link } from 'react-router-dom'
import "./menu.scss"
import React from 'react'

export default function Menu({ user, handleLogout, menuOpen, setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      {user ?
        <nav>
          <ul>
            <li onClick={()=>setMenuOpen(false)}>
              <Link to="/profiles">Profiles</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
              <Link to="/icebreakers">Icebreaker</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
              <Link to={`/profiles/${user.profile}`}>My Profile</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
              <Link to="/attractions">Date Ideas</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
              <Link to="" onClick={handleLogout}>Log Out</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
              <Link to="/changePassword">Change Password</Link>
            </li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
          <li onClick={()=>setMenuOpen(false)}>
              <Link to="/login">Log In</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      }
    </div>
  )
}
