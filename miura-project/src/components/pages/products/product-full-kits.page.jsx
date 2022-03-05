import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../../../firebase/config';
import { collection, getDocs,addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

import './product.css'
import ProductItem from "./product-item";




const ProductPageFullKit = () => {

    const productsCollectionRef = collection(db,"products");
    const [products,setProducts]=useState([]);

    useEffect(() => {
        
       getData();
    }, [])

    

    const getData = async ()=>{
        const data = await getDocs(productsCollectionRef);
       // console.log(data); 
        setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
     //  console.log(products);
       
    }







    return(
        <>
           <div className="row g-0 p-1">
               <div className="col-md-3">
                    <div className="card m-3">
                        <div className="card-header fw-bold bg-dark text-light">
                            PRICE FILTER
                        </div>
                        <div className="card-body mt-0">
                            <p>Price</p>
                            <input className="form-control" type="text" placeholder="From"/>
                            <input className="form-control mt-3" type="text" placeholder="To"/>
                            <button className="btn btn-primary btn-sm mt-3 float-end">Filter</button>

                           
                        </div>
                    </div>
               </div>
               <div className="col-md-9 mt-2">
                   <h3 className="ms-2">FULL-KITS</h3>
                    <div className="grid-container">

                       
                        {products.map((product)=>{
                                if(product.category=='fullkit'){
                                    return(
                                        <div key={product.id}>
                                            <ProductItem product={product} />
                                        </div>
                                    );
                                }
                            })}
                        
                    </div>
               </div>
           </div>
        </>
    )
}
export default ProductPageFullKit