import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
function Facilites() {
  return (
    <>
      <Header/>
      <div className="container h-full w-full px-4 md:px-0">
        <div className="heading h-[15vh] w-full md:w-[75vw] ml-4 md:ml-20">
          <h2 className='font-extrabold text-2xl md:text-4xl text-left pt-10'>Facilites</h2>
        </div>
        <div className="facilites h-full w-full flex flex-wrap">
          { 
            data.map((e) => (
              <div className="facilities-container flex flex-wrap h-[60vh] w-full md:w-[37vw] ml-4 md:ml-20 mt-8">
                <div className="card h-[58vh] w-full md:w-[32vw] shadow-md hover:border hover:border-solid hover:border-black bg-[#f8f7f5] ml-4 md:ml-7 rounded-md mt-4">
                  <div className="image h-[25vh] w-full md:w-[20vw]">
                    <img className='h-[25vh] rounded-md w-full md:w-[20vw]' src={e.img} alt="" /> 
                  </div>
                  <div className="content h-[17vh] w-full md:w-[29vw] justify-evenly">
                    <div className="name h-[5vh] w-full md:w-[25vw] text-left ml-2 mt-4">
                      <h2 className='font-bold text-xl md:text-2xl'>{e.Name}</h2>
                      <div className="desc h-[7vh] w-full md:w-[29vw] mt-2 text-left">
                        <p>{e.desc.slice(0,100)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="button h-[7vh] mt-1 w-full md:w-[11vw] ml-4 md:ml-64">
                    <Link to={e.route}>
                      <button className='h-[7vh] w-full md:w-[11vw] rounded-3xl bg-pink-400 text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black'>Register</button>
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