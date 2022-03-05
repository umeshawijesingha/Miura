import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";

import PaymentModel from '../../../PaymentModel/PaymentModel'

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [userDetails, setUserDetails] = useState({firstname:'',lastname:'',phone:'',address:'',city:'',orderId:'',amount:''});
  var total=0;
  return (
    <>
      <div className='container'>
        <div className='col-8 p-5'>
          <div>
            {cartItems.map((item) => {
              return (
                
                <div className='card mb-3'>
                  <div className='row'>
                    <div className='col-4'>
                    {total=total+item.price * item.itemQty}
                      <img
                        className='card-img-top'
                        src={item.image}
                        alt='Card image cap'
                        style={{
                          width: "200px",
                          height: "200px",
                          "object-fit": "cover",
                        }}
                      />
                    </div>

                    <div className='col-4'>
                      <p
                        className='py-10'
                        style={{
                          color: "red",
                          margin: "100px 70px 70px 70px",
                          "font-size": "20px",
                        }}
                      >
                        Rs.{(item.price * item.itemQty).toFixed(2)}
                      </p>
                    </div>

                    <div className='col-4'>
                      <p
                        style={{
                          margin: "100px 70px 70px 70px",
                          "font-size": "20px",
                        }}
                      >
                        Qty : {item.itemQty}
                      </p>
                    </div>

                    <div className='card-body'>
                      <p className='card-text'>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className='ms-0'>Billing & Shipping</h1>

          <div className='form-group'>
            <label for=''> First Name</label>
            <input className='form-control' type='text'  onChange={e=>{
              const newName={...userDetails,firstname:e.target.value};
              setUserDetails(newName)
              console.log(userDetails)
            }} />
          </div>

          <div className='form-group'>
            <label for=''> Last Name</label>
            <input className='form-control' type='text'  onChange={e=>{
              const newName={...userDetails,lastname:e.target.value};
              setUserDetails(newName)
              console.log(userDetails)
            }} />
          </div>


          <div className='form-group'>
            <label for=''> Address</label>
            <input className='form-control' type='text'  onChange={e=>{
              const address={...userDetails,address:e.target.value};
              setUserDetails(address)
              console.log(userDetails)
            }} />
          </div>

          <div className='form-group'>
            <label for=''> City</label>
            <input className='form-control' type='text'  onChange={e=>{
              const newCity={...userDetails,city:e.target.value};
              setUserDetails(newCity)
              console.log(userDetails)
            }} />
          </div>
          

          <div className='form-group'>
            <label for=''> Contact Number</label>
            <input className='form-control' type='text'  onChange={e=>{
              const newPhone={...userDetails,phone:e.target.value};
              setUserDetails(newPhone)
              var num=Math.random()
              console.log("nummmmmmm"+num)
              const newOrderId={...userDetails,orderId:{num}}
              setUserDetails(newOrderId)
              const newAmount={...userDetails,amount:{total}}
              setUserDetails(newAmount)
              console.log(userDetails)
            }} />
          </div>

          <div className='card my-3'>
            <div className='card-header bg-dark text-white text-uppercase fw-bold'>
              Price details
            </div>

            <div className='card-body mt-0'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th scope='col'>Total Amount</th>
                   
                    <th scope='col'>Rs.{total.toFixed(2)}</th>
                  </tr>
                  ‍
                </thead>
                <tbody></tbody>
              </table>

             <PaymentModel userDetails={userDetails}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
