import React from 'react'
import { CartFoodItems } from './CartFoodItems'
import { useDispatch, useSelector } from 'react-redux'
import store from '../utils/store'
import { clearCart } from '../utils/cartSlice'

export const Cart = () => {
   const cartItems = useSelector(store => store.cart.items)
   const dispatch = useDispatch();
   const handleClearCart = () => {
    dispatch(clearCart())
   }

  return (
    <div className='px-20 p-4'>
        <div>
            <div className='flex justify-between items-center px-1'>
            <h1 className='text-2xl text-primary font-bold'>Cart Items : {cartItems.length}</h1>
            <div className=''><button onClick={() => handleClearCart() }className='outline-none border border-gray-500 rounded-md py-2 font-bold px-4 text-sm text-white shadow-md hover:shadow-none hover:bg-white hover:text-black bg-primary '>Clear Cart</button></div>
            </div>
            <div className=' space-y-2 w-full h-fit p-2 mt-5'>
                 {cartItems.map((item) => <CartFoodItems key={item.id} {...item} />)}
            </div>
        </div>
    </div>
  )
}
