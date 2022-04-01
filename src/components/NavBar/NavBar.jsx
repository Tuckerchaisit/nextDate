import { Link } from 'react-router-dom'
import "./navBar.scss"

const NavBar = ({ user, handleLogout, menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar "+(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <Link to={`/profiles/${user?.profile}`}>
          <img src="/nextDateLOGO.png" alt="" className="logo"/>
          </Link>
        </div>
        
        <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default NavBar