import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function OTP() {

    const [otp,setotp] = useState()
   
  const location = useLocation();
  return (
    <div className="page">
      <h2>Enter OTP from {location?.state}</h2>

      <div className="flex-col otpinputs">
        
          <input type="number" maxLength={6} value={otp} onChange={(e)=>setotp(e.target.value)}/>
          <button className="blue">
              Verify
          </button>
      </div>
    </div>
  );
}
