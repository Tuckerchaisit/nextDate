import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
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
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>
          Name
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
      <div className={styles.inputContainer}>
        <label htmlFor="address" className="address">
          Location
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
      <div className={styles.inputContainer}>
        <label htmlFor="relationshipStatus" className="relationshipStatus">
          Relationship Status:
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
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          Email
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
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>
          Password
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
      <div className={styles.inputContainer}>
        <label htmlFor="confirm" className={styles.label}>
          Confirm Password
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
      <div >
        <label htmlFor="aboutMe" className="address">
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
      <div >
        <label htmlFor="contactInfo" className="address">
          Contact Info:
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
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={styles.button}>
          Sign Up
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  );
}

export default SignupForm
