import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './signup.scss'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className='signup-body'>
    <main className="signup-container">
      <h1 className='signup-title'>Sign Up</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
    </div>
  )
}

export default Signup
