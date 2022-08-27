import React from 'react'
import '../css/login.css'
import backgroundImageCover from '../components/Login/login-background-cover.png'
import LoginFormComponent from '../components/Login/LoginFormComponent'
import DividedSession from '../components/Template/LoginRegTemp/DividedSession'

const Login = () => {
  return (
    <div className='login-form-wrapper'>
    <div className='login-form-image-container'>
      <DividedSession backgroundImg={backgroundImageCover} backgroundImgAlt='Login background' backgroundImgClassName={'login-form-bg-img'}  />
    </div>
    <LoginFormComponent />
    </div>
  )
}

export default Login