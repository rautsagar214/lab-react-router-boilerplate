import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {

    let styling = {
        height : "30px",
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center"
    }
  return (
    <div className='navbar'>
        <h1><Link to={"/"} className='logo'>KALVIUM </Link></h1>
        <ul>
            <li><Link to={"/about"} className='link'>About</Link></li>
            <li><Link to={"/contact"} className='link'>Contact</Link></li>
        </ul>
    </div>
  )
}