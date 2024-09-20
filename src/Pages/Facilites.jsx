import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
function Facilites() {
  return (
   <>
   <Header/>
   <div className="conainer  h-[100vh] w-[100vw]">
      <div className="heading h-[15vh] w-[75vw] ml-20   ">
        <h2 className='font-extrabold text-4xl text-left pt-10'>Facilites</h2>
      </div>
      <div className="facilites h-[100vh] w-[100vw] flex flex-wrap">
      { 
      data.map((e) => (
        <div className="facilities-container flex flex-wrap h-[60vh] w-[37vw]  ml-20 mt-8">
        <div className="card h-[58vh] w-[32vw] shadow-md hover:border hover:border-solid hover:border-black bg-[#f8f7f5] ml-7 rounded-md mt-4">
        <div className="image  h-[25vh] w-[20vw] ">
          <img className='h-[25vh] rounded-md w-[20vw]' src={e.img} alt="" /> 
        </div>
        <div className="content h-[17vh] w-[29vw]  justify-evenly ">
        <div className="name h-[5vh] w-[25vw] text-left ml-2 mt-4 ">
          <h2 className='font-bold text-2xl'>{e.Name}</h2>
          <div className="desc h-[7vh] w-[29vw] mt-2 text-left ">
          <p>{e.desc.slice(0,100)}</p>
        </div>
        </div>
        
       
        </div>
        <div className="button h-[7vh] mt-1 w-[11vw]  ml-64">
          <Link to={e.route}>
          <button className='h-[7vh] w-[11vw] rounded-3xl   bg-pink-400 text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black'>Register</button>
          </Link>
        </div>
        
    </div>
    </div>
      ))
      
        }
   </div>
   </div>
   </>
  )
}
const data = [
  {
    img: "./images/OPD.png",
    Name:"Patient Registration",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eum aliquam autem temporibus eveniet iure, quibusdam dolorem id natus quod sed, blanditiis nobis sit unde dicta. Fugit illo ex nam!",
    route: "/PatientRegistration"
  },
  {
    img: './images/lab test.jpg',
    Name:"Lab Test",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eum aliquam autem temporibus eveniet iure, quibusdam dolorem id natus quod sed, blanditiis nobis sit unde dicta. Fugit illo ex nam!",
     route: "/Labtest"
  },
  {
    img: "./images/inventory.jpg",
    Name:"Inventory",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eum aliquam autem temporibus eveniet iure, quibusdam dolorem id natus quod sed, blanditiis nobis sit unde dicta. Fugit illo ex nam!",
  route: "/inventory"
  },
  {
    img: './images/medicine.jpg',
    Name:"Medicine",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eum aliquam autem temporibus eveniet iure, quibusdam dolorem id natus quod sed, blanditiis nobis sit unde dicta. Fugit illo ex nam!",
  route: "/medicine"
  },
  {
    img: "./images/inventory.jpg",
    Name:"Blood Bank",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eum aliquam autem temporibus eveniet iure, quibusdam dolorem id natus quod sed, blanditiis nobis sit unde dicta. Fugit illo ex nam!",
    route: "/BloodBank"
  },
]
export default Facilites