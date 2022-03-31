import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './loginForm.scss'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      
    >
      <div className="inputContainer">
        <label htmlFor="email" className="label">Email :</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="password" className="label">Password :</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="button-LN">Log In</button>
        <Link to="/">
          <button className="button-cnl">Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
