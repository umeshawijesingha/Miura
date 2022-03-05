import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router";
import { db } from '../../../firebase/config';
import { collection,getDoc,doc } from 'firebase/firestore';

import './product-info.css';
import { Navigate, useParams } from 'react-router';



const productInfo = () => {
  const params=useParams();
  const productsCollectionRef = collection(db,"products");
  const [product,setProduct]=useState([]);
  const dispatch=useDispatch();
  const {cartItems} =useSelector(state=>state.cartReducer)
  const navigate = useNavigate();
  useEffect(() => {
      
     getData();
     localStorage.setItem('cartItems',JSON.stringify(cartItems))
  }, [cartItems])

  

  const getData = async ()=>{
      const productTemp = await getDoc(doc(db,"products",params.productid));
      // const newProduct=productTemp.data();
      const newProduct=productTemp.data();
      setProduct(productTemp.data());
      setProduct({...productTemp.data(),id:productTemp.id})
    //  console.log(product.id);
    //   console.log("hhhh")
    //   console.log(productTemp.id)
     
     
  }



  const addToCart=(product)=>{
      dispatch({type:'ADD_TO_CART',payload:product});
      
      console.log(product)
  }
  var qty=product.quantity;
  var newQty=0;
  //console.log(qty)

  const isAvailable=()=>{
    if(qty>0){
     return <div><button className="btn btn-success text-center" onClick={()=>{
        addToCart(product)
        navigate('/cart')
    }}>Add To Cart</button>
    <input type="number" max={qty} min={1} placeholder='1' onChange={(e)=>quantityHandler(e.target.value)}></input>
    
    </div>
    
    }else{
     return <button className="btn btn-danger text-center">Not Available</button>
    }
  }

  const quantityHandler=(itemQty)=>{
    console.log(itemQty)
   setProduct({...product,itemQty:itemQty})
  
  }

 
  return (
  
  <>
  
  <main className="container">
 
  {/* <!-- Left Column / Headphones Image --> */}
  <div className="left-column">

    <img  src={product.image} alt=""/>
    
    
  </div>
 
 
  {/* <!-- Right Column --> */}
  <div className="right-column">
 
    {/* <!-- Product Description --> */}
    {product &&(<div>
    <div className="product-description">
     
      <h3>{product.name}</h3>
     
      <p>{product.description}</p>
      
      
    </div>
 
    
 
    {/* <!-- Product Pricing --> */}
    <div className="product-price">
      
      <span>148$</span>
      {/* <button className="btn btn-success text-center" onClick={()=>{
                    addToCart(product)
                }}>Add To Cart</button> */}

            {isAvailable()}
    </div>
    </div>)}
  </div>
</main>
  
  
  
  </>
  
  );
};

export default productInfo;
