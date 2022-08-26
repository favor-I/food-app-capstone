import React from 'react'
import './sectionOne.modules.css'
import MobileStore from '../../Mobile/MobileStore'
import sectionOneImg from './section-one-img.png'

const SectionOne = () => {
  return (
    <div className='section-one-container'>
        <div className='section-one-text-container'>
            <h1>Order <span className='section-one-h1-text-special'>food</span> anytime, anywhere</h1>
            <p>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>
            <MobileStore mobileAppConnectDivClassName={'section-one-app-store-buttons'} />
        </div>
        <img className='section-one-container-img' src={sectionOneImg} alt='section one img'></img>
    </div>
  )
}

export default SectionOne