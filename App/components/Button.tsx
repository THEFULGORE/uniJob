import React from 'react'

const Button = ({children}) => {
  return (
    <button className="bg-fuchsia-500 py-2 px-4 rounded-md text-white font-medium hover:bg-fuchsia-600 transition-colors">{children}</button>
  )
}

export default Button