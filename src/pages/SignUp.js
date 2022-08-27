import React from 'react'
import '../css/sign-up.css'
import SignUpFormComponent from '../components/SignUp/SignUpFormComponent'
import DividedSession from '../components/Template/LoginRegTemp/DividedSession'
import backgroundImageCover from '../components/SignUp/sign-up-background-cover.png'

const SignUp = () => {
  return (
    <div className='sign-up-form-wrapper'>
    <div className='sign-up-form-image-container'>
      <DividedSession backgroundImg={backgroundImageCover} backgroundImgAlt='Sign Up background' backgroundImgClassName={'sign-up-form-bg-img'}  />
    </div>
    <SignUpFormComponent />
    </div>
  )
}

export default SignUp