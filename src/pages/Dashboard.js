import React from 'react'
import '../css/dashboard.css'
import SideBar from '../components/SideBar/SideBar'
import DashboardContent from '../components/Dashboard/DashboardContent'

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
        <SideBar />
        <DashboardContent />
    </div>
  )
}

export default Dashboard