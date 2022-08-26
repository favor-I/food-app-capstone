import React from 'react'
import MenuImageSection from '../../MenuImageSection/MenuImageSection'
import stirFry from './vectors/stir-fry-img.png'
import meatBalls from './vectors/meat-balls.png'
import burgerMeal from './vectors/burger-meal.png'
import './sectionTwo.modules.css'

const SectionTwo = () => {
  const menuCardsXAttrb = [
    {menuImage: stirFry, menuImageAlt: 'Stir fry Pasta image', menuName: 'Stir fry Pasta', menuDescription: 'Stir fry pasta yada yada yada because of Sesan'},
    {menuImage: meatBalls, menuImageAlt: 'Meat balls image', menuName: 'Meat Balls', menuDescription: 'Stir fry pasta yada yada yada because of Sesan'},
    {menuImage: burgerMeal, menuImageAlt: 'Burger meal image', menuName: 'Burger Meal', menuDescription: 'Stir fry pasta yada yada yada because of Sesan'},
  ]
  return (
    <div className='section-two-container'>
        <h2>Special Meals of the day!</h2>
        <div className='section-two-container-p'>
          <p>Check our sepecials of the day and get discounts on all our meals </p>
          <p>and swift delivery to what ever location within Ilorin.</p>
        </div>
        <div className='meal-display-container'>
          {
            menuCardsXAttrb && menuCardsXAttrb?.map((item, index) => (
              <div className='meal-display-card'>
                <MenuImageSection mealImage={item.menuImage} mealImageAlt={item.menuImageAlt} mealName={item.menuName} mealDescription={item.menuDescription} />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default SectionTwo