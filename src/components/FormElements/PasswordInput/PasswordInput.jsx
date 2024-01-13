import React, { useState } from 'react'
import TextInput from '../Textinput/TextInput';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function PasswordInput({
    register,   
    errorMessage,
    className
}) {

    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const showPassword = ()=> {
        setPasswordVisibility(prev => !prev)
    }

  return (
    <div className='relative w-full'>
        <TextInput
          title="Password"
          type={passwordVisibility ? "text": "password"}    
          errorMessage={errorMessage}
          className={className}
          {...register("password", { required: "Password is required" })}
        />
        <div onClick={showPassword} className="absolute top-1/2 right-0 translate-y-[-20%] cursor-pointer p-2">
        {passwordVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </div>
    </div>
  )
}
