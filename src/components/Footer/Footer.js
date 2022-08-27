import React from 'react'
import './footer.models.css'
import MobileStore from '../Mobile/MobileStore'
import Socials from '../Socials/Socials'

const Footer = () => {
  return (
    <footer>
        <div className='footer-main'>
            <div>
                <h5>Company</h5>
                <p>Career</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div>
                <h5>Support</h5>
                <p>Help Center</p>
                <p>Safety Center</p>
            </div>
            <div>
                <h5>Legal</h5>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
                <p>Terms of Service</p>
                <p>Dispute resolution</p>
            </div>
            <div>
                <h5>Install App</h5>
                <MobileStore />
            </div>
        </div>
        <hr></hr>
        <div className='footer-copyright'>
            <p>© 2021 LILIES, All rights reserved</p>
            <div className='footer-social-links'>
                <Socials />
            </div>
        </div>
    </footer>
  )
}

export default Footer