import React from 'react'
import { Link } from 'react-router-dom'
import LoginRegBtn from '../Template/LoginRegBtn/LoginRegBtn'

const LoginFormComponent = ({handlesOnChange, handlesOnSubmit}) => {
  return (
    <form className='login-form' onChange={handlesOnChange} onSubmit={handlesOnSubmit}>
      <h3>Welcome Back!</h3>
      <input name='userEmail' type={'email'} placeholder='Your Email address'></input>
      <input name='userPassword' type={'password'} placeholder='Your Password'></input>
      {/* <Link to='/dashboard'><LoginRegBtn btnText='Login' /></Link> */}
      <LoginRegBtn btnText='Login' />
      <div className='login-create-acct-forgot-pass-div'>
        <p><Link to={'/sign-up'}>Create an account</Link></p>
        <p>forgot password?</p>
      </div>

    </form>
  )
}

export default LoginFormComponent