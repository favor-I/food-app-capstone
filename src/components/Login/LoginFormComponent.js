import React from 'react'
import { Link } from 'react-router-dom'
import LoginRegBtn from '../Template/LoginRegBtn/LoginRegBtn'

const LoginFormComponent = () => {
  return (
    <form className='login-form'>
      <h3>Welcome Back!</h3>
      <input type={'email'} placeholder='Your Email address'></input>
      <input type={'password'} placeholder='Your Password'></input>
      <LoginRegBtn btnText='Login' />
      <div className='login-create-acct-forgot-pass-div'>
        <p><Link to={'/sign-up'}>Create an account</Link></p>
        <p>forgot password?</p>
      </div>

    </form>
  )
}

export default LoginFormComponent