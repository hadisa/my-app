import React from 'react'

const Button = ({text, css}) => {
  return (
    <button className={` font-medium py-2 px-4 rounded-lg ${css}`}>
     {text}
    </button>
  )
}

export default Button
