import React, { useEffect, useState } from 'react'
import Select from "react-select";

export default function AddProduct() {

  const [img,setImg] = useState();
  const [preview,setPreview] = useState();

  const options = [
    { value: 'MachanicalTools', label: 'Machanical Tools' },
    { value: 'Fashion', label: 'Fashion' },
    { value: 'Vehical', label: 'Vehical' },
    { value: 'Imiation', label: 'Imiation' },
  
  ]
  

  const handleFile = (e) =>{
    setImg(e.target.files[0]);
  }
  const fileSelect = () =>{
    if(img)
    setPreview(URL.createObjectURL(img))
  }

  useEffect(()=>{
    fileSelect();
  },[img])

  return (
    <div className='addproduct page'>
      <h2>Add Product</h2>


      <div className="form flex">
        <div className="left">
          <div className='avatarWrap'>
            
            <p>Image :</p>
            <img src={preview || ""} className="avatar" alt="" />
            
            <label for='avatarimg' className='blue'><i className='im im-cloud-upload'></i></label>
            <input id="avatarimg" type="file" onChange={(e)=>handleFile(e)}/>
            
          </div>
        </div>
        <div className="right">
          <div className="title">
            <p>Name : </p>
            <input type="text" />
          </div>
          <div className="description">
            <p>Description : </p>
            <textarea type="text" rows={5}></textarea>
          </div>

          <div className="category">
            <p>Catergory : </p>
            <Select className="select" options={options}/>
            
          </div>

          <div className="rent">
            <p>Rent : </p>
            <div className='rentInp'>
              
              <input type="number" ></input>
              <select name="per" className='yellow' id="">
                  <option value="Per Day">Per Day</option>
                  <option value="Per Month">Per Month</option>
                  <option value="Per Year">Per Year</option>
              
              
              </select>
            </div>
          </div>

          <div className="title">
            <p>Date of Purchase : </p>
            <input type="date" />
          </div>


        </div>
      </div>
<div className='flex'>
  
        <button className='blue'>
          Add Product
        </button>
</div>
    </div>
  )
}
