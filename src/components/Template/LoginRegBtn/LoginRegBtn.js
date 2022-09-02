import './login-reg-btn.models.css'
import React from 'react'

const LoginRegBtn = ({btnText, btnName, onClickFunc, ownClassName}) => {
  return (
    <button onClick={onClickFunc} name={btnName} className={`login-reg-btn ${ownClassName}`}>{btnText}</button>
  )
}

export default LoginRegBtn