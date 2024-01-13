import React from 'react'
// import { forwardRef } from 'react';

 function SelectInput({
    label,
    name,
    options=[],
    errorMessage,
    className,
    placeholder,
    register,
    required,
    ...props
}) {
  return (
    <div className='w-full flex flex-col gap-2'>
    <label className='text-lg font-semibold'>{label} {required && <span className='text-red-500'>*</span>}</label>

    <select 
    // ref={ref}
    placeholder={placeholder}
    className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 ${className}`}
    {...register(name, {required: "This is required field"})}
    {...props}
    >
    {options?.map((option,i)=> (
        <option key={i} value={option.value}>{option.label}</option>
    ))}
    </select>
    <p className='text-md text-red-500'>{errorMessage}</p>
    </div>
  )
}

export default SelectInput