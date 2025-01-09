import React from 'react'
import { Link } from 'react-router-dom'
import SliderFacilities from './SliderFacilities'
import Footer from './Footer'
import ChatBot from './ChatBot'


function Hero() {
  return (
    <>
    <div className="hero h-auto md:h-[100vh]">
    <div className="BottomNav h-[10vh] w-full flex items-center justify-center gap-10 pt-3 bg-[#444444]">
     <h2 className='text-xl font-bold text-white text-center'>Why to wait and stand in long line. Book your Opd tickets from here!!</h2>
     <Link to='/PatientRegistration'><button className='bg-red-600 h-[6vh] w-[15vw] text-white text-xl hover:bg-red-700 rounded-3xl'>Get a Tocken</button></Link>
    </div>
    
    <div className="Outer h-auto md:h-[90vh] w-full">
      <div className="image h-[45vh] w-full">
        <img className='h-[45vh] w-full' src="./images/2.png" alt="" />
      </div>
      <ChatBot/>
      <div className="lower h-auto md:h-[78vh] bg-white w-full">
        <h2 className='h-[15vh] w-full text-3xl pt-9 font-extrabold text-center md:text-start'>OUR FACILITY</h2>
        <SliderFacilities/>
        </div>  
     
       <div className="AboutUs h-auto md:h-[55vh] w-full md:w-[90vw] mx-auto bg-white shadow-md border flex flex-col md:flex-row justify-evenly pt-16">
        <h2 className='h-[15vh] text-3xl pt-12 font-extrabold text-center md:text-start'>ABOUT US</h2>
            <div className='h-auto md:h-[30vh] w-full md:w-[65vw] pl-5'>
            <p className='text-left'>Under the Digital India initiative of the Ministry of Electronics & Information Technology, Government of India, National Informatics Centre (NIC) has developed the eHospital, e-BloodBank and ORS (Online Registration System) applications.

The eHospital application is the Hospital Management Information System (HMIS) for internal workflows and processes of hospitals. eHospital is a one-stop solution which helps in connecting patients, hospitals and doctors on a single digital platform.</p>
            </div>
            <div>
            <div className="button h-[8vh] w-[11vw] mt-5 md:mt-52 rounded-3xl pt-4"><Link to='/AboutUs'><button className='bg-pink-400 h-[8vh] w-[11vw] rounded-3xl text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black'>Read More</button></Link></div>
            </div>
            </div>
           
            <div className="contactUs h-auto md:h-[55vh] bg-white flex justify-center items-center">
                <div className="inner h-auto md:h-[50vh] w-full md:w-[50vw] flex flex-col md:flex-row justify-evenly rounded-xl shadow-md bg-[#f8f7f5]">
                <div className="left h-auto md:h-[50vh] w-full md:w-[25vw]">
                  <img className='h-auto md:h-[50vh] w-full md:w-[25vw]'
                  src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg" alt="" />
                </div>
                <div className="right h-auto md:h-[50vh] w-full md:w-[25vw] bg-[#f8f7f5] rounded-xl">
                    <h2 className='font-extrabold mt-5 text-2xl text-center md:text-start text-black'>Get In Touch </h2>
                    <div className="inputs h-auto md:h-[40vh] pt-4">
                        <input
                        className='rounded-3xl p-2 h-[5vh] border border-solid border-orange-400 bg-[#f8f7f5] w-full md:w-[18vw]'
                        type="text" 
                        placeholder=' Name'/>
                         <input
                        className='rounded-3xl p-2 border border-solid border-orange-400 bg-[#f8f7f5] h-[5vh] w-full md:w-[18vw] my-3'
                        type="text" 
                        placeholder='Email'/>
                        <input
                        className='h-[18vh] w-full md:w-[18vw] border border-solid border-orange-400 bg-[#f8f7f5] rounded-2xl pb-20 pl-2'
                        type="text"
                        placeholder='Message' />
                        <div className="buttons">
                        <button type='submit' className='bg-pink-400 mt-5 h-[32px] w-full md:w-[18vw] text-white hover:bg-white hover:text-black font-bold rounded-3xl hover:border hover:border-solid hover:border-black'>Send</button>
                    </div>
                    </div>
                   
                </div>
                
                </div>

            </div>
            <div className='bg-zinc-500 h-[5vh] text-black items-center justify-center flex'>
                       <Footer/>
                    </div>
    </div>
    </div>
    </>
  )
}

export default Hero