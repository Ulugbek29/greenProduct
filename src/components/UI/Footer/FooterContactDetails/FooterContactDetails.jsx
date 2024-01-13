import React from 'react'
import Icon from "../../../../assets/icons/Logo.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';



export default function FooterContactDetails() {
  return (
    <div className='w-full flex bg-[#46A3581A] p-4'>
        <div className='w-9/12 flex justify-between'>
            <div className='flex-1'>
                <img src={Icon} />
            </div>
            <div className='flex-1 flex gap-2 items-center '>
                <LocationOnIcon />
                <p className='text-sm'>70 West Buckingham Ave. <br />
Farmingdale, NY 11735</p>
            </div>
            <div className='flex-1 flex gap-2 items-center'>
                <EmailIcon />
                <p className='text-sm'>contact@greenshop.com</p>
            </div>
        </div>
        <div className='w-4/12 flex gap-2 items-center'>
            <PhoneCallbackIcon />
            <p className='text-sm'>+88 01911 717 490</p>
        </div>
    </div>
  )
}
