import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/CartSlice';
function MedicineCard({id,name,img,price}) {
  const dispatch = useDispatch()
  return (
    <>
     <div className="Card h-[35vh] w-full md:w-[20vw] bg-[#f8f7f5] mt-4 ml-5 rounded-md shadow-md">
        <div className="image h-[20vh] w-full md:w-[20vw]">
          <img className='h-[20vh] w-full md:w-[20vw] pl-5 pt-3' src={img} alt="" />
        </div>
        <div className="name h-[5vh] w-full md:w-[20vw] font-bold mr-40 mt-3"> {name}</div>
        <div className="content flex justify-evenly gap-24">
          <div className="price">₹{price}</div>
          <div className="button w-36">
            <button 
             onClick={()=> {
              dispatch(addToCart({id,name,price, img, qty : 1}))
              
             }}
            className='h-[4vh] w-full rounded-3xl bg-pink-400 text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black'>Add To Cart</button>
          </div>
        </div>
      </div>
          
    </>
  )
}

export default MedicineCard