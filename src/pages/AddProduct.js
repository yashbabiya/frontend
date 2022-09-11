import React, { useEffect, useState } from "react";
import Select from "react-select";
import firebaseUpload from "../helpers/firbaseUpload";
import { useNavigate } from "react-router-dom";
import { API } from "../API";
import axios from "axios";

export default function AddProduct() {
  const [img, setImg] = useState();
  const [preview, setPreview] = useState();
  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const [category, setcategory] = useState();
  const [rent, setrent] = useState();
  const [timeduration, settimeduration] = useState("Per Month");
  const [dop, setdop] = useState();
  const [city, setCity] = useState();

  const options = [
    { value: "MachanicalTools", label: "Machanical Tools" },
    { value: "Fashion", label: "Fashion" },
    { value: "Vehical", label: "Vehical" },
    { value: "Imiation", label: "Imiation" },
  ];

  const navigate = useNavigate();

  const handleFile = (e) => {
    setImg(e.target.files[0]);
  };
  const fileSelect = () => {
    if (typeof img == "object") setPreview(URL.createObjectURL(img));
    else setPreview(img);
  };

  
  


  const handleSubmit = async () => {
    console.log(name, description, category, rent, timeduration, dop, img);
    if (
      // true
      name && description && category && rent && timeduration && dop && img
      ) {


      
      firebaseUpload(img, name,async(img_url)=>{

        const reqBody = {
          title: name,
          description,
          age: dop,
          rent,
          timeperiod: timeduration,
          category,
          image: img_url.data,
          location: city,
        };


        const res = await axios.post(API + "/product/create", reqBody, {withCredentials:true}).catch(()=>{
          alert("Oops an error occured !!")
        });

        if (res.status === 200) {
          navigate("/explore");
        }

      },()=>{
        alert("Image not uploaded")
      });

      

      
        
      
    }
  };

  useEffect(() => {
    fileSelect();
  }, [img]);

  return (
    <div className="addproduct page">
      <h2>Add Product</h2>

      <div className="form flex">
        <div className="left">
          <div className="avatarWrap">
            <p>Image :</p>
            {!preview ? (
              <div className="avatar"></div>
            ) : (
              <img src={preview || ""} className="avatar" alt="" />
            )}

            <label for="avatarimg" className="blue">
              <i className="im im-cloud-upload"></i>
            </label>
            <input id="avatarimg" type="file" onChange={(e) => handleFile(e)} />
          </div>
        </div>
        <div className="right">
          <div className="title">
            <p>Name : </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="description">
            <p>Description : </p>
            <textarea
              type="text"
              rows={5}
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            ></textarea>
          </div>

          <div className="title">
            <p>Location : </p>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="category">
            <p>Catergory : </p>
            <Select
              className="select"
              options={options}
              onChange={(selectedOptions) => setcategory(selectedOptions.value)}
            />
          </div>

          <div className="rent">
            <p>Rent : </p>
            <div className="rentInp">
              <input
                type="number"
                value={rent}
                onChange={(e) => setrent(e.target.value)}
              ></input>
              <select
                name="per"
                className="yellow"
                id=""
                value={timeduration}
                onChange={(e) => {
                  console.log(e);
                  settimeduration(e.target.value);
                }}
              >
                <option value="Per Day">Per Day</option>
                <option value="Per Month">Per Month</option>
                <option value="Per Year">Per Year</option>
              </select>
            </div>
          </div>

          <div className="title">
            <p>Date of Purchase : </p>
            <input
              type="date"
              value={dop}
              onChange={(e) => setdop(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <button className="blue" onClick={handleSubmit}>
          Add Product
        </button>
      </div>
    </div>
  );
}
