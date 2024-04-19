// import React from 'react'

const Button = (props) => {
    const {children, onClick = ()=>{}} = props;
  return (
    <button onClick={onClick} className="inline-block cursor-pointer rounded-md bg-gray-800 shadow-lg px-4 py-2 text-center text-sm font-semibold tracking-widest text-white transition duration-200 ease-in-out hover:bg-gray-600">
      Detail
    </button>
  )
}

export default Button