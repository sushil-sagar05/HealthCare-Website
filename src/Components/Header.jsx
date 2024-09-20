import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
    <header className='h-[10vh]'>
        <nav className='w-[100vw] fixed z-50 p-0 bg-white flex justify-between h-[10vh]  '>
        <div className="leftNav h-[25vh] w-[15vw]  
         ">
          <div className="image h-[12vh] w-[12vw]   ">
           <Link to="/"> <img 
            className="image h-[25vh] w-[12vw] pl-3 pb-20  "
            src="./images/logo.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="rightNav  w-[45vw]  cursor-pointer">
           <div className='items'> <ul className='flex justify-evenly font-bold my-5' >
           <li>
                <NavLink
                  to="/BloodBank"
                  className={({isActive}) => `${isActive ? "text-orange-700" : "text-black"}  border-orange-700 hover:text-orange-700`} > Blood Bank
                </NavLink>
               </li> 
                 
               <li>
                <NavLink
                  to="/AboutUs"
                  className={({isActive}) => `duration-200 ${isActive ? "text-orange-700" : "text-black"}   border-orange-700 hover:text-orange-700`} > About Us
                </NavLink>
               </li>
               <li>
                <NavLink
                  to="/Medicine"
                  className={({isActive}) => `${isActive ?"text-orange-700" : "text-black"}  border-orange-700  hover:text-orange-700`} > Medicines
                </NavLink>
               </li>
               <li>
                <NavLink
                  to="/FAQ"
                  className={({isActive}) => `${isActive ? "text-orange-700" : "text-black"}  border-orange-700 hover:text-orange-700`} > FAQs
                </NavLink>
               </li> 
               <li>
                <NavLink
                  to="/Register"
                  className={({isActive}) => `${isActive ? "text-orange-700" : "text-black"}  border-orange-700 hover:text-orange-700`} > Login/Register
                </NavLink>
               </li>
            </ul></div>
        </div>
        </nav>
        
        </header>

    </>
  )
}

export default Header
/*
 
*/