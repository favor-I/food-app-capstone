import React from 'react'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import youTube from './youTube.svg'
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <>
        <Link to='#'><img src={instagram} alt='Instagram icon'></img></Link>
        <Link to='#'><img src={twitter} alt='Twitter icon'></img></Link>
        <Link to='#'><img src={youTube} alt='YouTube icon'></img></Link>
    </>
  )
}

export default Socials