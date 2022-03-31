import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signupForm.scss'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    relationshipStatus: '',
    email: '',
    password: '',
    passwordConf: '',
    aboutMe: '',
    contactInfo: ''
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData)
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const isFormInvalid = () => {
    return !(formData.name && formData.email && formData.password && formData.password === formData.passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="SUF-container"
    >
      <div className="input-SUF-container">
        <label htmlFor="name" className="USF-label">
          Name :
        </label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="input-SUF-container">
        <label htmlFor="address" className="USF-label">
          Location :
        </label>
        <input
          type="text"
          autoComplete="off"
          id="address"
          value={formData.address}
          name="address"
          onChange={handleChange}
        />
      </div>
      <div className="input-SUF-container">
        <label htmlFor="relationshipStatus" className="USF-label">
          Relationship Status :
        </label>
        <select
          name="relationshipStatus"
          id="relationshipStatus"
          onChange={handleChange}
        >
          <option value="Single">Single</option>
          <option value="Complicated">Complicated</option>
          <option value="Married">Married</option>
          <option value="In A Relationship">In A Relationship</option>
        </select>
      </div>
      <div className="input-SUF-container">
        <label htmlFor="email" className="USF-label">
          Email :
        </label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="input-SUF-container">
        <label htmlFor="password" className="USF-label">
          Password :
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className="input-SUF-container">
        <label htmlFor="confirm" className="USF-label">
          Confirm Password :
        </label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={formData.passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <div className='input-SUF-container'>
        <label htmlFor="aboutMe" className="USF-label">
          About Me:
        </label>
        <input
          type="text"
          autoComplete="off"
          id="aboutMe"
          value={formData.aboutMe}
          name="aboutMe"
          onChange={handleChange}
        />
      </div>
      <div className='input-SUF-container' >
        <label htmlFor="contactInfo" className="USF-label">
          Contact Info :
        </label>
        <input
          type="text"
          autoComplete="off"
          id="contactInfo"
          value={formData.contactInfo}
          name="contactInfo"
          onChange={handleChange}
        />
      </div>
      <div className="input-SUFContainer">
        <button disabled={isFormInvalid()} className="USF-button">
          Sign Up
        </button >
        <Link to="/">
          <button className="USF-button">Cancel</button>
        </Link>
      </div>
    </form>
  );
}

export default SignupForm
