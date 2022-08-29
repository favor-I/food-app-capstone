import React from 'react'
import './menu.models.css'

const Menu = ({ cardImg, cardImgAlt, menuName, menuDesc, price, addBtn }) => {
  return (
    <div className='menu-card'> 
        <img src={cardImg} alt={cardImgAlt}></img>
        <h4>{menuName}</h4>
        <p>{menuDesc}</p>
        <div className='price-place' >
            <p>{price}</p>
            <p className='add-to-cart'>{addBtn}</p>
        </div>
    </div>
  )
}

export default Menu