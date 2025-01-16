import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';

function Hamburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerRef = useRef(null);

  const toggleButton = () => {
    setHamburgerOpen(!hamburgerOpen);
    if (hamburgerRef.current) {
      hamburgerRef.current.style.opacity = hamburgerOpen ? '0' : '1';
    }
  };

  return (
    <div>
      <button onClick={toggleButton}>
        {hamburgerOpen ? <RxCross1 /> : <GiHamburgerMenu />}
      </button>
      <div
        ref={hamburgerRef}
        className={`bg-white  rounded-lg  text-xl text-center w-36 cursor-pointer mr-5 text-black transition-opacity duration-300 ${hamburgerOpen ? 'opacity-100' : 'opacity-0'}`}
        style={{ position: 'absolute', top: '65px', right: '0' }}
      >
        <ul className='border border-black rounded-lg shadow-md h-1/2  mr-2 font-bold text-xl '>
          <Link to='/BloodBank'><li className='my-5 hover:bg-red-500 '>Blood Bank</li></Link>
          <hr />
          <Link to='/AboutUs'><li className='my-5 hover:bg-red-500'> About Us</li></Link>
          <hr />
          <Link to='/Medicine'><li className='my-5 hover:bg-red-500'>Medicines</li></Link>
          <hr />
          <Link to='/FAQ'><li className='my-5 hover:bg-red-500'>FAQs</li></Link>
          <hr />
          
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;