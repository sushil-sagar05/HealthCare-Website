import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import CartItems from './CartItems';
import {useSelector,useDispatch} from 'react-redux'

function CartCompo() {
  const dispatch = useDispatch()
    const [activeCart, setActiveCart] = useState('false')
    const cartItems = useSelector((state) => state.cart.cart)
    const totalQty = cartItems.reduce((totalQty,item) => totalQty + item.qty,0)
    const totalPrice = cartItems.reduce((totalPrice,item) => totalPrice+ item.qty * item.price, 0)
    
  return (
   <>
   <div className={`Cart fixed p-5 right-0 top-32 w-full md:w-[23vw] h-[75vh] bg-white shadow-md ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
   <IoMdCloseCircleOutline
    onClick={()=>setActiveCart(!activeCart)}
   className='font-extrabold text-3xl cursor-pointer ml-auto mb-2'
   />
   <div className="container">
     {cartItems.length > 0  ? cartItems.map ((food) => {
      return <CartItems  
       key={food.id} id= {food.id} name={food.name} price={food.price} img={food.img} qty={food.qty}
    
     />}): <h2 className='text-center text-xl font-bold text-gray-800'>Your Cart is empty</h2>}
     
   </div>
<div className="content text-left pl-6 pt-6 absolute bottom-14 h-[15vh] w-full md:w-[18vw] ml-4">
<h3>Total Items: {totalQty}</h3>
<h3>Total Amount: ₹{totalPrice}</h3>
</div>
<hr />
   <div className="buttons fixed bottom-5 w-80 ml-4 md:w-[18vw] h-[4vh] bg-pink-400 text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black rounded-3xl ">
    <button className='w-full items-center font-semibold pt-1'>Buy Now</button>
   </div>
   </div>
    <FaShoppingCart
    className='fixed bottom-8 text-3xl cursor-pointer right-8'
    onClick={()=> setActiveCart(!activeCart)}
    />
   </>
  )
}

export default CartCompo
