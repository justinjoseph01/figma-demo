import React from 'react';
import './header.css';
import { FiSearch } from "react-icons/fi";
import { HiUser } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";

function Header() {
  return (
    <div className='Headerparent'>
        <div className='Headerchild'>
        <div className='Headerleft'>
            <p className='heading'>
                Home
            </p>
            <p className='heading'>
                Clothes
            </p>
            <p className='heading'>
                Shoes
            </p>
            <p className='heading'>
                Accesseries
            </p>
        </div>
        <div className='logo'>
           <p className='logoheading'>
            Logoname
            </p>
        </div>
        <div className='headerright'>
            <div className='searchgap'>
           
            <input className="search" type="text"    placeholder="Search..."/><FiSearch/>
            </div>
            <HiUser/>
            <HiShoppingCart/>
            <AiFillHeart/>
            

        </div>

        </div>
      
    </div>
  )
}

export default Header