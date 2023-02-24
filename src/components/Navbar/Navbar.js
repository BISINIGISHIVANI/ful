import React from 'react'
import {logo} from "../../assets"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="mainlogo"className='logo'width="100"height="40"/>
      Home Features Pricing Blog 
      Technology Search Category Search Email Verification Professional Domain Data Technology Compare Keyword Search
      Login Signup
    </div>
  )
}

export default Navbar