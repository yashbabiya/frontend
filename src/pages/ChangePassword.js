import React from 'react'
import Logo from '../components/Logo'

export default function ChangePassword() {
  return (
    <div className="sendemail flex-col">
      <Logo />
      <h2>Change Password</h2>
      <div className="title">
        <p>Password : </p>
        <input type="password" />
      </div>

      <div className="title">
        <p>Confirm Password : </p>
        <input type="password" />
      </div>
      <button className="blue">Update Password</button>
    </div>
  )
}
