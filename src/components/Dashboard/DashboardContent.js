import React from 'react'
import Menu from './Menu/Menu'
import pasta from './assets/pasta.png'
import pasta2 from './assets/pasta2.png'
import pasta3 from './assets/pasta3.png'
import pasta4 from './assets/pasta4.png'
import pasta5 from './assets/pasta5.png'
import pasta6 from './assets/pasta6.png'
import profilePicture from './assets/profile-picture.jpg'

const DashboardContent = ({loggedInUser}) => {
    const cardContent = [
        {image: pasta, imageAlt: 'pasta image', name: 'Stir Fry Pasta', description: 'The in-house pasta and chicken by chef Moose', itemPrice: 'N 1,000.00', addBtn: 'Add to cart'},
        {image: pasta2, imageAlt: 'pasta image', name: 'Stir Fry Pasta', description: 'The in-house pasta and chicken by chef Moose', itemPrice: 'N 1,000.00', addBtn: 'Add to cart'},
        {image: pasta3, imageAlt: 'pasta image', name: 'Stir Fry Pasta', description: 'The in-house pasta and chicken by chef Moose', itemPrice: 'N 1,000.00', addBtn: 'Add to cart'},
        {image: pasta4, imageAlt: 'pasta image', name: 'Stir Fry Pasta', description: 'The in-house pasta and chicken by chef Moose', itemPrice: 'N 1,000.00', addBtn: 'Add to cart'},
        {image: pasta5, imageAlt: 'pasta image', name: 'Stir Fry Pasta', description: 'The in-house pasta and chicken by chef Moose', itemPrice: 'N 1,000.00', addBtn: 'Add to cart'},
        {image: pasta6, imageAlt: 'pasta image', name: 'Stir Fry Pasta', description: 'The in-house pasta and chicken by chef Moose', itemPrice: 'N 1,000.00', addBtn: 'Add to cart'},
    ]
  return (
    <div className='dashboard-content-container'>
        <div className='top'>
            <div className='top-welcome-container'>
                <h3>Good Morning {loggedInUser}</h3>
                <p>What delicious meal are you craving today?</p>
            </div>
            <img src={profilePicture} alt='Profile avi'></img>
        </div>
        <div className='bottom'>
            {
                cardContent && cardContent?.map((item, index) => (
                    <Menu key={index} cardImg={item.image} cardImgAlt={item.imageAlt} menuName={item.name} menuDesc={item.description} price={item.itemPrice} addBtn={item.addBtn} />
                ))
            }
        </div>
    </div>
  )
}

export default DashboardContent