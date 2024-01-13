import React from 'react'
import bgGreenImage from "../../../assets/images/greenjpg.jpg"
import Login from "../../Auth/Login/Login"


export default function AuthLayout() {
  return (
    <div className='w-full min-h-screen flex bg-green-500'>
            <div className='flex-1 min-h-full'>
                <img src={bgGreenImage} className="w-full h-full"/>
            </div>

            <div className='flex-1 min-h-full flex justify-center items-center'>
                <Login />
            </div>
    </div>
  )
}
