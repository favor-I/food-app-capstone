import React from 'react'

const DividedSession = ({backgroundImg, backgroundImgAlt, backgroundImgClassName, formComponent}) => {
  return (
    <>
        <div className={backgroundImgClassName}>
          <img src={backgroundImg} alt={backgroundImgAlt} ></img>
          {/* <img src={backgroundImg} alt={backgroundImgAlt} ></img> */}
        </div>
        <div>
        {formComponent}
        </div>
    </>
  )
}

export default DividedSession