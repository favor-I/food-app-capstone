import React from 'react'
import LoginRegBtn from '../Template/LoginRegBtn/LoginRegBtn'

const LoginFormComponent = () => {
  return (
    <form className='login-form'>
      <h3>Welcome Back!</h3>
      <input type={'email'} placeholder='Your Email address'></input>
      <input type={'password'} placeholder='Your Password'></input>
      <LoginRegBtn btnText='Login' />
      <div className='login-create-acct-forgot-pass-div'>
        <p>Create an account</p>
        <p>forgot password?</p>
      </div>

    </form>
  )
}

export default LoginFormComponent