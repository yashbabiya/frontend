import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API } from '../API';
import Logo from '../components/Logo';
import { useDispatch } from 'react-redux';
import logout from '../helpers/logout';

export default function VerifyEmail() {

  let { token } = useParams();
  const dispatch = useDispatch();

  const [message,setMessage] = useState("Loading ...")
    useEffect(()=>{
        axios.get(API+`/auth/verify_email?verify_email_token=${token}`).then(()=>{
            setMessage("Verified")
            logout(dispatch);
            
        }).catch(()=>{
            setMessage("Error Occured")
        })
    },[])
  return (
    <div className='fullpage flex-col'>
        <Logo/>
        <h1>
        VerifyEmail
        </h1>
        <p>{message}</p>
        
    </div>
  )
}
