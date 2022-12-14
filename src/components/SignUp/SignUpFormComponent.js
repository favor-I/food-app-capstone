import React from 'react'
import {Link} from 'react-router-dom'
import LoginRegBtn from '../Template/LoginRegBtn/LoginRegBtn'

const SignUpFormComponent = ({onChangeFunc, handlesOnSubmit}) => {
  return (
    <form className='sign-up-form' onSubmit={handlesOnSubmit}>
      <h3>Welcome to Lilies!</h3>
      <input onChange={onChangeFunc} name='userName' placeholder='Your First Name'></input>
      <input onChange={onChangeFunc} name='userEmail' type={'email'} placeholder='Your Email address'></input>
      <input onChange={onChangeFunc} name='userPassword' type={'password'} placeholder='Your Password'></input>
      <LoginRegBtn btnText='Sign Up' />
      <div className='create-acct-forgot-pass-div'>
        <p>Already have an account. <span className='login-btn'><Link to='/login'>LOGIN</Link></span></p>
      </div>
    </form>
  )
}

export default SignUpFormComponent