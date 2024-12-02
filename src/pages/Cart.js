import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { toast, ToastContainer } from 'react-toastify'
import StripeCheckout from "react-stripe-checkout";
import  axios  from 'axios';
import  emailjs  from '@emailjs/browser'
import  {Shippo}  from 'shippo';

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
      
      // Create address object
      const shippoToken = new Shippo({apiKeyHeader: 'shippo_test_f03ba5c63c9171b12d63c423744d20a267796680'});
      
      async function run() {
        const result = await shippoToken.addresses.list();
      
        // Handle the result
        console.log(result);
      }
      
      run();
      
      const addressFrom = {
          name: "TEAM BRIJE",
          company: "PWIPSTORE",
          street1: " Xochicalco 678",
          city: "CDMX",
          state: "CDMX",
          zip: "03020",
          country: "MX", // iso2 country code
          phone: "+52 55 2317 4934",
          email: "shikatastrophe@gmail.com",
      };
      const addressTo = {
        name: "Mr Hippo",
        company: "",
        street1: "Broadway 1",
        street2: "",
        city: "New York",
        state: "NY",
        zip: "10007",
        country: "US",
        phone: "+1 555 341 9393",
        email: "mrhippo@shippo.com",
        metadata: "Hippos dont lie"
    };
    var parcel = {
      "length":"5",
      "width":"5",
      "height":"5",
      "distance_unit":"in",
      "weight":"2",
      "mass_unit":"lb",
  };
      
  var shipment = {
    "object_purpose": "PURCHASE",
    "address_from": addressFrom,
    "address_to": addressTo,
    "parcel": parcel,
    "async": false
};
      
      const transaction2 = async(token)=>{
      
      shippoToken.transaction.create({
        "shipment": shipment,
            "carrier_account": "07280f4f96f34cc8b75e593c4835dc38",
            "servicelevel_token": "usps_priority",
            "label_file_type": "PNG"
      }, function (err, transaction) {
        console.log("transaction : %s", JSON.stringify(transaction, null, 4));
        // print label_url and tracking_number
        if (transaction.object_status === "SUCCESS") {
            console.log("Label URL: %s", transaction.label_url);
            console.log("Tracking Number: %s", transaction.tracking_number);
        } else {
            //Deal with an error with the transaction
            console.log("Message: %s", transaction.messages);
        }
      });
      }

      transaction2();

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
