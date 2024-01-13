import React from 'react'
import { forwardRef } from 'react';

 function TextInput({
  title,
  required,
  className,
  type,
  placeholder,
  errorMessage,
  ...props
},ref) {
  return (
    <div className='w-full flex flex-col gap-2'>
        <label className='text-md font-semibold'>{title} {required && <span className='text-red-500'>*</span>}</label>
        <input 
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 ${className}`}
          {...props}
        /> 
        <p className='text-md text-red-500'>{errorMessage}</p>
    </div>
  )
}

export default forwardRef(TextInput);