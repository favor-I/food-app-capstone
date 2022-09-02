import { React , useState} from 'react'
import '../css/sign-up.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import SignUpFormComponent from '../components/SignUp/SignUpFormComponent'
import DividedSession from '../components/Template/LoginRegTemp/DividedSession'
import backgroundImageCover from '../components/SignUp/sign-up-background-cover.png'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    setForm({
      ...form,[e.target.name]: e.target.value
    })    
  // console.log(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    sessionStorage.setItem('newUser',JSON.stringify(form))

    NotificationManager.success('User Created')

    // toast.success('Account Created')

    setInterval(()=>{
      // window.location = '/login'
      navigate('/')
    }, 2000)
  }
  // console.log(form)
  return (
    <div className='sign-up-form-wrapper'>
      <NotificationContainer />
    <div className='sign-up-form-image-container'>
      <DividedSession backgroundImg={backgroundImageCover} backgroundImgAlt='Sign Up background' backgroundImgClassName={'sign-up-form-bg-img'}  />
    </div>
    <SignUpFormComponent handlesOnSubmit = {(e)=>handleSubmit(e)}  onChangeFunc = {(e)=>handleChange(e)} />
    </div>
  )
}

export default SignUp