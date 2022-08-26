import React from 'react'
import './sectionThree.models.css'

const SectionThree = () => {
  return (
    <div className='section-three-container'>
        <div className='section-three-left'>
            <h3>Get notified when we update!</h3>
            <p>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
        </div>
        <div className='section-three-right'>
            <input placeholder='emailId@gmail.com'></input>
            <button>Get notified</button>
        </div>
    </div>
  )
}

export default SectionThree