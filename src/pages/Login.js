import React, { useState } from 'react'
import '../css/login.css'
import LoginFormComponent from '../components/Login/LoginFormComponent'
import DividedSession from '../components/Template/LoginRegTemp/DividedSession'
import backgroundImageCover from '../components/Login/login-background-cover.png'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// const

const Login = () => {
  const [loginData, setLoginData] = useState({})
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()


  const handleChange = (e) => {
    setLoginData({
      ...loginData, 
      [e.target.name]: e.target.value 
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    // setIsAuthenticated(true)
    const storedUser = JSON.parse(sessionStorage.getItem('newUser'))
    
    if(loginData?.userEmail === storedUser?.userEmail && loginData?.userPassword === storedUser?.userPassword ){
      setTimeout(()=>{
        toast.success(`${storedUser.userName} is signed in`, {position: 'bottom-right', autoClose: 1000, theme: 'dark'})
        navigate('/dashboard')
      })
    }
    else if(storedUser === null){
      setTimeout(()=> {
        toast.error("User doesn't exist", {position: 'bottom-right', autoClose: 1000, theme: 'dark'})
        navigate('/sign-up')
      })
    }
    else if (loginData?.userEmail !== storedUser?.userEmail || loginData?.userPassword !== storedUser?.userPassword){
      toast.error(`invalid login details`, {position: 'bottom-right', autoClose: 1000})
    }
    
  }


  return (
    <div className='login-form-wrapper'>
    <div className='login-form-image-container'>
      <DividedSession backgroundImg={backgroundImageCover} backgroundImgAlt='Login background' backgroundImgClassName={'login-form-bg-img'}  />
    </div>
    <LoginFormComponent handlesOnChange = {(e)=>handleChange(e)} handlesOnSubmit = {(e)=>handleLogin(e)} />
    </div>
  )
}

export default Login