import React from 'react'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import youTube from './youTube.svg'

const Socials = () => {
  return (
    <>
        <img src={instagram} alt='Instagram icon'></img>
        <img src={twitter} alt='Twitter icon'></img>
        <img src={youTube} alt='YouTube icon'></img>
    </>
  )
}

export default Socials