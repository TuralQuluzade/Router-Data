import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router';

const Header = () => {
  return (
    <div  style={{width:"100%",height:"80px",backgroundColor:"cyan",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Link style={{fontSize:"40px",textDecoration:"none",color:"black"}} to="/"> anyLogo </Link>
            <div style={{display:"flex",gap:"30px"}}>
                <Link style={{fontSize:"40px",color:"black"}} to="/cart"><FaShoppingCart /></Link>
                <Link style={{fontSize:"40px",color:"black"}} to="/favorite"><FaHeart /></Link>
            </div>
           </div>
  )
}

export default Header