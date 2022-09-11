import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  Cookies  from 'js-cookie';
import { useSelector } from 'react-redux';

export default function EditProfile() {
  const [img, setImg] = useState();
  const [preview, setPreview] = useState();

  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [city,setCity] = useState();
  const [mobile,setMobile] = useState();



  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state)=>state.auth)

  useEffect(()=>{
    if(user){
      
      setUsername(user.username)
      setEmail(user.email)
      setCity(user.location)
      setMobile(user.mobile)
      setPreview(user.avatar)

    }
  },[user])

  const handleFile = (e) => {
    setImg(e.target.files[0]);
  };
  const fileSelect = () => {
    if (img) setPreview(URL.createObjectURL(img));
  };


  const logout = ()=>{
    dispatch({type:"LOGOUT"})
    Cookies.remove('rentit')
    window.location.pathname  = '/'
    
  }

  useEffect(() => {
    fileSelect();
  }, [img]);

  return (
    <div className="editProfile page">
      <div className="flex-bet">
        <h2>Edit Profile</h2>
        <button className="red" onClick={()=>logout()}>Logout</button>
      </div>

      <div className="form">
        <div className="top flex">
          <div className="avatarWrap">
            <p>Avatar :</p>
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

        <div className="bottom flex">
          <div className="left">
            <div className="title">
              <p>Name : </p>
              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="title">
              <p>Email : </p>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
          </div>
          <div className="right">
            <div className="title">
              <p>Location (city) : </p>
              <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
            </div>
            <div className="title">
              <p>Mobile : </p>
              <input type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <button className="blue">Edit Profile</button>
      </div>
    </div>
  );
}
