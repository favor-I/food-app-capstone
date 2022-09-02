import React from 'react'
import './side-bar.models.css'
import Logo from  './assets/logo.svg'
import homeIcon from './assets/icons/home.svg'
import profileIcon from './assets/icons/profile.svg'
import orderIcon from './assets/icons/order.svg'
import cartIcon from './assets/icons/cart.svg'
import LoginRegBtn from '../Template/LoginRegBtn/LoginRegBtn'


const SidebarLogo = () => {
    return (
        <div className='sidebar-logo-container'>
            <img src={Logo} alt='Logo for sidebar'></img>
            <h3>Lilies</h3>
        </div>
    )
}

const SidebarItem = ({itemLogo, itemLogoAlt, item, itemNotify, spanClassName, itemSelectClassName}) => {
    return (
        <div className={`sidebar-item  ${itemSelectClassName}`}>
            <img src={itemLogo} alt={itemLogoAlt}></img>
            <p>{item}</p>
            <span className={spanClassName}>{itemNotify}</span>
        </div>
    )
}

const SideBar = ({itemSelectClassName, handlesLogout}) => {
    // console.log(handlesLogout)
  return (
    <div className='sidebar-wrapper'>
        <SidebarLogo />
        <div className='sidebar-item-wrapper'>
            <SidebarItem itemSelectClassName={itemSelectClassName} itemLogo={homeIcon} itemLogoAlt='Home icon for dashboard' item='Dashboard'/>
            <SidebarItem itemLogo={profileIcon} itemLogoAlt='Profile icon' item='Your Profile' />
            <SidebarItem spanClassName='sidebar-item-order' itemLogo={orderIcon} itemLogoAlt='Order icon' item='Order' itemNotify={6}/>
            <SidebarItem spanClassName='sidebar-item-cart' itemLogo={cartIcon} itemLogoAlt='Cart icon' item='Cart' itemNotify={5}/>
            <LoginRegBtn onClickFunc={handlesLogout} ownClassName={'logout-btn'} btnName='submit' btnText={'Logout'} />
            {/* <button className='logout-btn' name='submit' onClick={handlesLogout}>Logout</button> */}
        </div>
    </div>
  )
}

export default SideBar