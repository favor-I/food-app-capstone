import React from 'react'
import './menuImageSection.css'


const MenuImageSection = ({mealImage, mealImageAlt, mealName, mealDescription}) => {
    // menuCards && menuCards?.map((item, index) => (
    //   <div className=''></div>
    // ))
  return (

    <>
      <img src={mealImage} alt={mealImageAlt}></img>
      <h3>{mealName}</h3>
      <p>{mealDescription}</p>
    </>
  )
}


export default MenuImageSection