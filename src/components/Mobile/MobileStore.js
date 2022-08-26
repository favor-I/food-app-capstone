import React from 'react'
import {Link} from 'react-router-dom'
import appleStoreConn from './vectors/appleStoreConn.svg'
import androidStoreConn from './vectors/androidAppConn.svg'

const MobileStore = ({mobileAppConnectDivClassName}) => {
  return (
    <div className={mobileAppConnectDivClassName}>
        <Link to='#'> <img src={androidStoreConn} alt='play store connect svg'></img> </Link>
        <Link to='#'> <img src={appleStoreConn} alt='apple store connect svg'></img> </Link>
    </div>
  )
}

export default MobileStore