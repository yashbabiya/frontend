import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../API";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Product() {
  let { id } = useParams();
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [product, setProduct] = useState();
  const [isLoading,setIsLoading] = useState(false);
  const fetchProduct = async () => {
    // try{

    const res = await axios.get(API + `/product/${id}`);
    setProduct(res.data);

    // }
    // catch(e){

    // }
  };

  const retriveProduct = async() =>{

    setIsLoading(true)
    try{

      const res = await axios.delete(API+`/product/revoke?productid=${id}`,{withCredentials:true})
      if(res.status === 200)
      {
        setIsLoading(false);
        window.location.reload()
      }
    }
    catch(e){
      alert("Not retrived")
    }

  }
  
  
  const calcAge = (datePr) =>{
    const now = Date.parse(datePr + " 00:00:00")
    const today = Date.now();


    
    

    const DAY = ((today-now)/(1000*60 *60 * 24)) ;

    return Math.floor(DAY);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (product)
    return (
      <div className="page productpage">
        <h1>{product.title}</h1>
        <div className="top">
          <div className="left">
            <img src={product.image} alt="" />
          </div>
          <div className="right">
            <div className="inRight">
              <h2>{product.title}</h2>
              <p>
                {product.description} 
              </p>
              <div className="rating green">
                {" "}
                <i className="im im-star"></i> {product.rating}
              </div>
              <div className="rent">
                <p>
                  <b>Rent : </b> {product.rent} {product.timeperiod}
                </p>
              </div>

              <div className="productAge">
              <p><b>Age of product : </b> {calcAge(product.age)} Days</p>
              </div>
            </div>
            
            <div className="actions">
              {product.renterid === user._id && !product.issued && (
                <button
                  className="blue"
                  onClick={() => navigate("/editProduct", { state: product })}
                >
                  Edit Product
                </button>
              )}
              {product.renterid === user._id && !product.issued && (
                <button
                  className="yellow"
                  onClick={() => navigate("/assignproduct", { state: product })}
                >
                  Assign Product
                </button>
              )}
              {product.renterid === user._id && product.issued && (
                <button
                  className="red"
                  onClick={() => retriveProduct()}
                >
                  Retrive Product
                </button>
              )}
            </div>
          </div>
        </div>

        <h2>Owner Details</h2>
        <div className="ownerdetails"></div>

        <h2>Reviews</h2>
        <div className="ownerdetails"></div>
      </div>
    );
  else {
    return <>Loading ...</>;
  }
}
