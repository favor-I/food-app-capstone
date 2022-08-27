import './login-reg-btn.models.css'
import React from 'react'

const LoginRegBtn = ({btnText}) => {
  return (
    <button className='login-reg-btn'>{btnText}</button>
  )
}

export default LoginRegBtn