import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  SearchIcon from  '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// Images 
import MainLogo from "../../../assets/icons/Logo.png"
import LoginButton from '../../Buttons/LoginButton/LoginButton';


export default function NavBar() {
    const navigate = useNavigate()

    const handelClick = ()=> {
        navigate("/login")
    }

  return (
    <div className='w-full h-[56px] flex justify-between items-center border-b-2 py-6'>
        <div className="w-[200px]">
            <img  src={MainLogo} className=" object-contain"/>
        </div>

        <ul className='w-full h-full flex items-center justify-center gap-8'>
            <li className='text-lg border-b-2 border-transparent hover:border-[#3FB339]'>
                <Link to="/home">Home</Link>
            </li>
            <li className='text-lg border-b-2 border-transparent hover:border-[#3FB339]'>
                <Link to="/shop">Shop</Link>
            </li>
            <li className='text-lg border-b-2 border-transparent hover:border-[#3FB339]'>
                <Link to="/plantCare">Plant Care</Link>
            </li>
            <li className='text-lg border-b-2 border-transparent hover:border-[#3FB339]'>
                <Link to="/blogs">Blogs</Link>
            </li>
        </ul>

        <div className='flex items-center gap-4'>
            <SearchIcon className='cursor-pointer hover:text-[#3FB339]' fontSize="medium"/>
            <ShoppingCartIcon className='cursor-pointer hover:text-[#3FB339]' fontSize="medium"/>
            <LoginButton title='LogIn' size="medium" style={{backgroundColor: "#3FB339"}} onClick={handelClick}/>
        </div>
    </div>
  )
}
