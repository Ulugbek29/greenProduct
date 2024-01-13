import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import paymentCards from "../../../../../../assets/images/payment.png"

export default function RadioButtonsGroup({
    label="Paytment Method",
    register,
}) {



  return (
    <>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        defaultValue="cash"
        name="paymentMethod"
        className='flex flex-col gap-4'
        {...register("paymentMethod", {required: false})}
      >
      <div className='p-2 border rounded-lg focus:border-[#3FB339]'>
        <FormControlLabel className='w-full' 
          value="creditCard" control={<Radio />} label={<img src={paymentCards}  className="object-contain"/>}/>
      </div>
      <div className='flex gap-2  p-2 border rounded-lg focus:border-[#3FB339]'>
        <FormControlLabel className='w-full'
          value="bankTransfer" control={<Radio />} label="Direct Bank Transfer" />
      </div>
      <div className='flex gap-2  p-2 border rounded-lg focus:border-[#3FB339]'>
        <FormControlLabel className='w-full'
          value="cash" control={<Radio />} label="Cash on delivery" />
      </div>
      </RadioGroup>
    </>
  );
}