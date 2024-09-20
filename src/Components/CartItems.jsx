import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import {removeFromCart,incrementQty,decrementQty} from '../Redux/Slices/CartSlice'
function CartItems({id,name,price,qty,img}) {
  const dispatch = useDispatch()
  return (
   <>
   <div className='h-[12vh] mb-2  flex w-[20vw] bg-[#f8f7f5]  '>
   <div className="container h-[12vh] flex w-[20vw]  ">
    <div className="img h-[8vh] w-[8vw]  mt-2 ml-2 ">
      <img className='h-[8vh] w-[8vw]' src={img} alt="" />
    </div>
   
   </div>
   <div className="name h-[3vh] w-[30vw] ">
    <div className="namee h-[5vh] mt-4 w-[11vw]  bg-white text-left">{name}</div>
   <div className='flex gap-3'> <div className="price h-[3vh] w-[3vw]  ml-1 mt-2">{price} </div>
    <div className="increment h-[3vh] flex w-[4vw]  gap-2 mt-2"><FaPlus 
    onClick={() => qty >= 0 ? dispatch(incrementQty({id})) : qty = 0}
    className='mt-1 cursor-pointer'/> <span>{qty}</span><FaMinus 
    onClick={() => qty > 1 ? dispatch(decrementQty({id})): qty = 0}
    className='mt-1 cursor-pointer' /></div>
    <div className="delte h-[3vh] w-[2vw]  mt-2"> <MdDelete className='cursor-pointer'
     onClick={()=> {dispatch(removeFromCart({id,name,img,price,qty}))}}
    />
    </div>
    </div>
   </div>
 
   </div>
   </>
  )
}

export default CartItems