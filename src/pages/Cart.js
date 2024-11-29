import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { ToastContainer } from 'react-toastify'

const Cart = () => {
  const productData = useSelector((state)=> state.bazar.productData);
  const [TotalAmt, SetTotalAmt] = useState("");

  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price
    });
    SetTotalAmt(price);
  },[productData])
  return (
    <div>
      <div className='max-w-screen-x1 mx-auto py20 flex'>
        <CartItem/>
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] broder-b-gray-400 pb-6'>
            <h2 className='text-2x1 font-medium'>Cart Totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>
                ${TotalAmt}
              </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{" "}
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              </span>
            </p>
          </div>
          <p>
            Total <span className='text-xl font-bold'>${TotalAmt}</span>
          </p>
          <button className='bg-black text-white w-full py-3 mt-6 active:bg-gray-800'>Checkout</button>
        </div>
      </div>
      <ToastContainer 
        position='top-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'/>
    </div>
  )
}

export default Cart
