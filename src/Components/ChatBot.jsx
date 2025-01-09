import React, { useState } from 'react'
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";

function ChatBot() {
    const [activeBot, SetActiveBot] = useState('false')
  return (
   <>
   
  <div className={`chatbot fixed p-5 right-0 top-52 w-full md:w-[20vw] h-[50vh] bg-white shadow-md rounded-md ${activeBot ? "translate-x-full" : "translate-x-0"} transition-all duration-500 z-50`} >
   <div className='flex'>
   <span className='font-semibold w-full md:w-[20vw]'>Help Bot</span>
    <IoMdCloseCircleOutline
    onClick={()=>SetActiveBot(!activeBot)}
   className='font-extrabold text-3xl cursor-pointer ml-2'
   />
   </div>
   <div className="contentCard h-96 bg-[#f8f7f5]">
        <div className="questions flex gap-3 pt-5">
            <div className='ml-3'><FaUserDoctor /> </div>
            <div>Ask Your Questions...</div>
            
        </div>
        <div className='w-1/2 h-1/2 font-extrabold text-4xl pt-5'>
           <div className='w-full h-full'>UnderConstruction</div> 
        </div>
        <div className="Answers fixed right-7 mt-5">
            <div>Answers....</div>
        </div>
        <div className='flex'><div className="input fixed bottom-8 ml-2 rounded-md">
    <input type="text"
    className='border border-solid border-black'
    placeholder='Enter Your Query..'
    name="" id="" />
   </div>
   <div className="button fixed bottom-8 right-9 w-16">
    <button className='bg-pink-400 h-[4vh] w-full cursor-pointer text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black rounded-3xl'>Ask</button></div></div>
   </div>
   
  </div>
        <TbMessageChatbotFilled 
        onClick={()=> SetActiveBot(!activeBot)}
        className="chatbot cursor-pointer fixed right-[3.5rem] z-40 rounded-3xl shadow-md text-4xl"
        />
   </>
  )
}

export default ChatBot