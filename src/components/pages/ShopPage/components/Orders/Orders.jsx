import React from 'react'
import Order from './Order/Order'
import PaymentMethod from "./PaymentMethod/PaymentMethod"

export default function Orders({orders, register}) {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex justify-between border-b-2 border-[#d3d3d3]'>
            <p className='text-lg font-semibold'>Products</p>
            <p className='text-lg font-semibold'>Subtotal</p>
        </div>

        <div className='flex flex-col gap-2'>
        {orders.map((order)=> {
            return <Order order={order}/>
        })}
        </div>

        <div>
            <p className='text-right'>Have a coupon code? <a className='text-[#3FB339]'>Click here</a></p>
        </div>

        <div className='flex flex-col gap-4 py-4 pl-20'>
            <div className='flex justify-between'>   
                <p>Subtotal</p>
                <h2 className='font-semibold'>$2.683.00</h2>
            </div>
            <div className='flex justify-between'>   
                <p>Coupon Discount</p>
                <h2 className='font-semibold'>(-)00.00</h2>
            </div>
            <div className='flex justify-between'>   
                <p>Shiping</p>
                <h2 className='font-semibold'>$16.00</h2>
            </div>
            <a className='text-[#3FB339] text-right'>View shipping charge</a>
            <div className='flex justify-between p-2 border-t border-[#d3d3d3]'>
                <h2 className='text-lg font-semibold'>Total</h2>
                <h2 className='text-[#3FB339] font-semibold'>$2.669.00</h2>
            </div>
        </div>

        <div className='py-4 pl-20'>
        <PaymentMethod register={register}/>
        </div>
    </div>
  )
}
