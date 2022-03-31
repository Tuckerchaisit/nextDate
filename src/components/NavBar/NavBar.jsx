import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="/icebreakers">Icebreakers</Link></li>
            <li><Link to= {`/profiles/${user.profile}`}> My Profile </Link></li>
            <li><Link to="/attractions">Date Ideas</Link></li>
            <li><Link to="" onClick={handleLogout}>Log Out</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar