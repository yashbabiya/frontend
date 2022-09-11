import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import LoginGIF from "../imgs/login.gif";
import axios from "axios";
import { API } from '../API';
import { useDispatch } from "react-redux";
export default function Login() {

  const [username ,setUsername] = useState()
  const [password ,setPassword] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async() =>{
      // if(username &&password){

          const reqBody = {
            username,password
          }
          try{
            const res = await axios.post(API + '/auth/login' ,reqBody,{withCredentials:true})

            const data = res.data;
            dispatch({type:"LOGIN",payload:data})
            navigate('/')
            
            console.log(data);
          }
          catch(e){
            alert(e.response.data)
          }



      // }
  }
  return (
    <div className=" login flex">
      <div className="left flex-col">
        <Logo />
        <div className="form flex-col">
          <div className="flex-col">
            <div>
              <p>Username : </p>
              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
            
            <div>
              <p>Password : </p>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
            </div>
            
            <Link to="/sendemail" className="fgtp">Forgot password</Link>
            <button className="blue" onClick={handleSubmit}>Login</button>
          </div>
          <Link to="/signup">Create a new account</Link>

        </div>
      </div>
      <div className="right flex-col">
        <img src={LoginGIF} alt="" className="img" />
        <div>
          <h1>Welcome Back</h1>
          <p>Login to your account to see your data</p>
        </div>
      </div>
    </div>
  );
}
