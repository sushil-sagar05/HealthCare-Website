import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { TbMessageChatbotFilled } from "react-icons/tb";



function SliderFacilities() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
  return (
    <div className=''>
        <div className='h-[55vh] v-[65vw]'>
       <Slider {...settings}>
        {
            data.map((d)=> (
                <>
                <div className='bg-[#f8f7f5]  w-[] rounded-xl mx-5 my-4'>
                <div className="card w-[25vw] m-auto h-[50vh]  ">
                    <div className="img h-[25vh] w-[25vw] pr-10 flex justify-center items-center">
                        <img className='h-[25vh] w-[25vw] ' src={d.img} alt="" />
                    </div>
                    <div className="other my-4">
                        <div className="name">
                            <h2 className='font-bold'>{d.name}</h2>
                        </div>
                        <div className="desc">
                          <p>{d.desc}</p>  
                        </div>
                      <Link to={d.route}><button className='cursor-pointer bg-pink-400   h-[42px] w-32 rounded-3xl  text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black'>Register</button></Link>  
                    </div>
                </div>
                </div>
                </>
            ))
        }
        </Slider>
       
        </div>
      
  
       
        <div className="button flex"><Link to="/Facilites"><button className='bg-pink-400 h-[42px] w-32 font-bold mb-7 ml-[75vw] rounded-3xl cursor-pointer  text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black'>viewAll</button>
        </Link>
     

        </div>
      
    </div>
  )
}
const data = [
    {
        name: "Patient Registration" ,
        desc: "The patient registration module of the eHospital",
        img :"./images/OPD.png",
        route: "/PatientRegistration",
    },
    {
        name: "Lab Test",
        desc: '',
        img:'./images/lab test.jpg',
        route: "/LabTest",
    },
    {
        name: "Blood Bank",
        desc: "lorem",
        img:'./images/blood bank.jpg',
        route: "/BloodBank",
    },
    {
        name: "medicine",
        desc:"lorem",
        img:'./images/medicine.jpg',
        route: "/medicine",
    },
    {
        name: "inventory" ,
        desc: "The patient registration module of the eHospital",
        img:'./images/inventory.jpg',
        route: "/inventory",
    },
    

]
export default SliderFacilities