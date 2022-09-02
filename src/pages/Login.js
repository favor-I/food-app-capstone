import React, { useState } from 'react'
import '../css/login.css'
import LoginFormComponent from '../components/Login/LoginFormComponent'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DividedSession from '../components/Template/LoginRegTemp/DividedSession'
import backgroundImageCover from '../components/Login/login-background-cover.png'
import { useNavigate } from 'react-router-dom';

// const

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()


  const handleChange = (e) => {
    setLoginData({
      ...loginData, 
      [e.target.name]: e.target.value 
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    const storedUser = JSON.parse(sessionStorage.getItem('newUser'))
    
    if(loginData?.userEmail === storedUser?.userEmail && loginData?.userPassword === storedUser?.userPassword ){
      setIsAuthenticated(true)
      NotificationManager.success(`${storedUser.userName} is signed in`, 'Success Message', 2000)
      navigate('/dashboard')
    }else{
      NotificationManager.error('invalid login details', 'Error Message', 2000)
    }
    
  }


  return (
    <div className='login-form-wrapper'>
      <NotificationContainer />
    <div className='login-form-image-container'>
      <DividedSession backgroundImg={backgroundImageCover} backgroundImgAlt='Login background' backgroundImgClassName={'login-form-bg-img'}  />
    </div>
    <LoginFormComponent handlesOnChange = {(e)=>handleChange(e)} handlesOnSubmit = {(e)=>handleLogin(e)} />
    </div>
  )
}

export default Login