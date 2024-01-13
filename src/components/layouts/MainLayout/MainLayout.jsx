import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../UI/NavBar/NavBar'

export default function MainLayout() {
  return (
    <div className='w-full h-full px-[8%]'>
        <NavBar />
        <div className="pt-[20px]">
            <Outlet />
        </div>
    </div>
  )
}
