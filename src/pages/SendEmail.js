import React from "react";
import Logo from "../components/Logo";

export default function SendEmail() {
  return (
    <div className="sendemail flex-col">
      <Logo />
      <h2>Forgot Password</h2>
      <div className="title">
        <p>Email : </p>
        <input type="email" />
      </div>

      <button className="blue">Send Email</button>
    </div>
  );
}
