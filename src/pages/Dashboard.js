import React, { useEffect, useState } from 'react'
import '../css/dashboard.css'
import SideBar from '../components/SideBar/SideBar'
import DashboardContent from '../components/Dashboard/DashboardContent'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  let [activeUser, setActiveUser] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const itemClassName = window.location.pathname === '/dashboard' ? 'selected-sidebar-item': ''
  useEffect(()=>{
    let existingUserDet = JSON.parse(sessionStorage.getItem('newUser'))
    if(existingUserDet)setActiveUser(existingUserDet)      
  },[])

    const handleLogout = () => {
      setIsAuthenticated(isAuthenticated)
      sessionStorage.clear()
      setTimeout(()=> {
        navigate('/')
      }, 1000)
    }

  return (
    <div className='dashboard-wrapper'>
        <SideBar handlesLogout= {()=>handleLogout()} itemSelectClassName={itemClassName}/>
        <DashboardContent loggedInUser={activeUser?.userName}/>
    </div>
  )
}

export default Dashboard