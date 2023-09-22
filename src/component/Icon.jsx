import React from 'react'
import icons from "../assets/icons/_icons.svg"

const Icon = ({icon,iconStyle,onClick, xPos, yPos}) => {
  return (
    <svg key={icon}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={iconStyle}
    onClick={onClick}
    style={{'--x': xPos,'--y': yPos}}

  >
    <use xlinkHref={`${icons}#${icon}`} />
  </svg>
  )
}

export default Icon