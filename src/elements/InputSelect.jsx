// import React from 'react'

const InputSelect = ({placeholder,changeInput}) => {
  return (
    <>
        <input onChange={changeInput} placeholder={placeholder} className='bg-base-300 w-4/12 py-2 px-2 border rounded-lg border-blue-300' type="text" />
    </>
  )
}

export default InputSelect