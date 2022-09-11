import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { API } from '../API';
import axios from "axios";


export default function Product() {


  let {id} = useParams();

  

  const [product,setProduct] = useState();
  const fetchProduct = async()=>{
    // try{

        const res = await axios.get(API + `/product/${id}`);
        setProduct(res.data);
    
    // }
    // catch(e){

    // }
  }


  useEffect(()=>{
    
    fetchProduct()
  },[ ])


  if(product)
  return (
    <div className='page productpage'>

        <div className="top">
            <div className="left">
                <img src={product.image} alt="" />
            </div>
            <div className="right">

            <div className='inRight'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
            </div>

            </div>
        </div>


        <h2>Product Details</h2>
        <div className="prouctdetails">
            <div className="one">
                <h3>Age Of Product</h3>
                <p>{product.age}</p>
            </div>
            <div className="one">
                <h3>Rent</h3>
                <p>{product.rent}{" "}{product.timeperiod}</p>  
            </div>
            <div className="one">
                <h3>Rating</h3>
                <p>{product.rating}</p>
            </div>
        </div>

        <h2>Owner Details</h2>
        <div className="ownerdetails">
            
        </div>


        <h2>Reviews</h2>
        <div className="ownerdetails">
            
        </div>
        
        
    </div>
  )
  else{
    return <>Loading ...</>
  }
}
