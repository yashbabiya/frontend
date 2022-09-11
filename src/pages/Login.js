import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import LoginGIF from "../imgs/login.gif";
export default function Login() {
  return (
    <div className=" login flex">
      <div className="left flex-col">
        <Logo />
        <div className="form flex-col">
          <div className="flex-col">
            <div>
              <p>Username : </p>
              <input type="text" />
            </div>
            
            <div>
              <p>Password : </p>
              <input type="password" />
            </div>
            
            <Link to="/sendemail" className="fgtp">Forgot password</Link>
            <button className="blue">Login</button>
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
