import React, { useState } from 'react'
import '../css/dashboard.css'
import SideBar from '../components/SideBar/SideBar'
import DashboardContent from '../components/Dashboard/DashboardContent'

const Dashboard = () => {
    let [activeUser] = useState('Favour')

    // console.log(window.location.pathname)
  return (
    <div className='dashboard-wrapper'>
        <SideBar />
        <DashboardContent loggedInUser={activeUser}/>
    </div>
  )
}

export default Dashboard