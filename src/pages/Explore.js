import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import {API} from '../API'
import ProductCard from '../components/ProductCard';
export default function Explore() {


const options = [
  { value: 'MachanicalTools', label: 'Machanical Tools' },
  { value: 'Fashion', label: 'Fashion' },
  { value: 'Vehical', label: 'Vehical' },
  { value: 'Imiation', label: 'Imiation' },

]

const [products,setProducts] = useState([])

const fetchProducts = async() =>{
  try{

    const res = await axios.get(API+'/product/findall')
    setProducts(res.data);
  }
  catch(e){

  }

}
useEffect(()=>{
  fetchProducts()
},[])


  return (
    <div className="page explore">
      <div className="top flex-col">
        <h2>Explore</h2>

        <div className="search">
          <input type="text" />
          <button className="green roundBtn"><i className="im im-magnifier"></i></button>
        </div>
        

        <Select className="select" options={options} isMulti/>
      </div>

      <div className="listProduct">{
        products.map(product => <>
        <ProductCard {...product} />
        </>
        )
        
      }
        
      </div>
    </div>
  );
}
