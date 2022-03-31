import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './login.scss'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className='login-body'>
    <img className="login-logo" src="/nextDateLOGO.png" alt="" />
    <main className="login-container ">
      <h1 className='title-login'>Log In</h1>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
    </main>
    </div>
  )
}

export default LoginPage
