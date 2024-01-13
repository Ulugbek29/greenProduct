import React from 'react'
import cactusImage from "../../../assets/images/cactus.png"

export default function GardenInfo({title}) {
  return (
    <div className='flex-1 flex flex-col justify-start gap-2 border-r p-4'>
        <div className='w-full flex items-center'>
            <img src={cactusImage} className="object-contain"/>
        </div>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-md text-gray-500 leading-6'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
    </div>
  )
}
