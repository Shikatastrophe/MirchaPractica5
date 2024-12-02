import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { toast, ToastContainer } from 'react-toastify'
import StripeCheckout from "react-stripe-checkout";
import  axios  from 'axios';
import  emailjs  from '@emailjs/browser'

const Cart = () => {
  const productData = useSelector((state)=> state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [TotalAmt, SetTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  emailjs.init({
    publicKey: "VgPJ30KtQ9GFgXCBY",
    });

  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price
    });
    SetTotalAmt(price);
  },[productData]);
  const handleCheckout = () => {
    if(userInfo){
      var params = {
        to_name : userInfo.displayName,
        from_name : "PWIPSTORE",
        email_id : userInfo.email,
        message : "Hola! Gracias Por Comprar en PWIPSTORE! Tu producto se enviará pronto!."
      }
      emailjs.send("service_xe9h8xf","template_ohup918",params).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      setPayNow(true)
    }else{
      toast.error("Please sign in to Checkout");
    }
  }
  const payment = async(token)=>{
    await axios.post("http://localhost:8000/pay",{
      amount: TotalAmt*100,
      token: token,
    })
    
  }
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
                ENVIO GRATIS 
              </span>
            </p>
          </div>
          <p>
            Total <span className='text-xl font-bold'>${TotalAmt}</span>
          </p>
          <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 active:bg-gray-800'> 
            Proced to checkout
            </button>
            {
              payNow && (
              <div className='w-full mt-6 flex items-center justify-center'>
                <StripeCheckout 
                  stripeKey="pk_test_51QQfZLDHO1R6d8VSLtjnkHW8xDBUK90GGBUS2D8mlnEjE8AAL95ZijVWvxQLYKPcgoeZWWz3Ak1F9p6ls60UdPDU00yCvl3837"
                  name="Pwipstore"
                  amount={TotalAmt*100}
                  label="Pay to Pwipstore"
                  description={`Your Payment amount is $${TotalAmt}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            )}
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
