import React from 'react'
import './side-bar.models.css'
import Logo from  './assets/logo.svg'
import { useLocation } from 'react-router-dom'
import homeIcon from './assets/icons/home.svg'
import profileIcon from './assets/icons/profile.svg'
import orderIcon from './assets/icons/order.svg'
import cartIcon from './assets/icons/cart.svg'


const SidebarLogo = () => {
    return (
        <div className='sidebar-logo-container'>
            <img src={Logo} alt='Logo for sidebar'></img>
            <h3>Lilies</h3>
        </div>
    )
}

const SidebarItem = ({itemLogo, itemLogoAlt, item, itemNotify, spanClassName}) => {
    return (
        <div className='sidebar-item'>
            <img src={itemLogo} alt={itemLogoAlt}></img>
            <p>{item}</p>
            <span className={spanClassName}>{itemNotify}</span>
        </div>
    )
}

const SideBar = () => {
    console.log(useLocation.pathname)
  return (
    <div className='sidebar-wrapper'>
        <SidebarLogo />
        <div className='sidebar-item-wrapper'>
            <SidebarItem itemLogo={homeIcon} itemLogoAlt='Home icon for dashboard' item='Dashboard'/>
            <SidebarItem itemLogo={profileIcon} itemLogoAlt='Profile icon' item='Your Profile' />
            <SidebarItem spanClassName='sidebar-item-order' itemLogo={orderIcon} itemLogoAlt='Order icon' item='Order' itemNotify={6}/>
            <SidebarItem spanClassName='sidebar-item-cart' itemLogo={cartIcon} itemLogoAlt='Cart icon' item='Cart' itemNotify={5}/>
        </div>
    </div>
  )
}

export default SideBar