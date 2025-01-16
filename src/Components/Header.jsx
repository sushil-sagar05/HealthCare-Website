import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import Hamburger from './Hamburger'
function Header() {
  return (
    <>
    <header className='h-[10vh]  '>
        <nav className='w-full  shadow-md fixed z-50 p-0 bg-[#f8f7f5] flex md:justify-between  h-[10vh]'>
        <div className="leftNav  h-28  md:h-[15vh] md:w-[15vw] w-1/2 ">
          <div className="image  h-full  object-cover  ">
           <Link to="/"> <img 
            className="image  h-1/2 w-full  pl-3 "
            src="./images/logo.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="rightNav hidden lg:flex flex-col  w-full  md:w-[35vw] cursor-pointer">
           <div className='items '> 
           <ul className='flex  md:flex-row justify-evenly font-bold my-5'>
           <li>
                <NavLink
                  to="/BloodBank"
                  className={({isActive}) => `${isActive ? "text-orange-700" : "text-black"} border-orange-700 hover:text-orange-700`} > Blood Bank
                </NavLink>
               </li> 
                 
               <li>
                <NavLink
                  to="/AboutUs"
                  className={({isActive}) => `duration-200 ${isActive ? "text-orange-700" : "text-black"} border-orange-700 hover:text-orange-700`} > About Us
                </NavLink>
               </li>
               <li>
                <NavLink
                  to="/Medicine"
                  className={({isActive}) => `${isActive ?"text-orange-700" : "text-black"} border-orange-700 hover:text-orange-700`} > Medicines
                </NavLink>
               </li>
               <li>
                <NavLink
                  to="/FAQ"
                  className={({isActive}) => `${isActive ? "text-orange-700" : "text-black"} border-orange-700 hover:text-orange-700`} > FAQs
                </NavLink>
               </li> 
              
            </ul>
            </div>
        </div>
        <div className='h-36 text-2xl w-1/2 right-0 absolute pt-5 lg:hidden'>
        <Hamburger />
        </div>
        
        </nav>
        
        </header>

    </>
  )
}

export default Header