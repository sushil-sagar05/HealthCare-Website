import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Slider from 'react-slick';

function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <Header/>
      <div className="container h-[55vh] w-full">
        <Slider {...settings}>
          {
            Data.map((e) => (
              <div className="img h-[55vh] w-full shadow-md">
                <img className='h-[55vh] w-full shadow-md' src={e.img} alt="" />
              </div>
            ))
          }
        </Slider>
      </div>
      <div className="About h-[10vh] w-full md:w-[20vw] mx-auto">
        <h2 className='font-extrabold text-3xl pt-3 text-center'>About Us</h2>
      </div>
      <div className='mx-4 md:mx-20'><hr /></div>
      <div className="content h-[55vh] w-full md:w-[75vw] mx-auto">
        <p className='px-4 md:px-10 text-left text-xl mt-4 bg-[#f8f7f5]'>
          <span className=''>“</span> Welcome to CareSync, where healthcare meets innovation. Our platform is designed to revolutionize how patients access and manage healthcare services. By leveraging cutting-edge technology, CareSync simplifies the patient journey, from scheduling appointments to managing hospital stays, all in one place.
          Our mission is to reduce wait times, streamline hospital processes, and enhance patient care through user-friendly web and mobile applications. We understand the challenges of navigating healthcare systems, which is why we focus on improving patient flow management and ensuring that every patient receives timely and efficient care.
          At CareSync, we’re not just building a platform — we’re creating a seamless healthcare experience. Whether you're a patient, doctor, or hospital administrator, our goal is to provide you with the tools you need to improve healthcare outcomes across the board.<span>”</span>
        </p>
        <div className="foot mt-20 mx-4 md:mx-10">
          <h2 className='text-left font-semibold'>Contact Us : support@Caresync.com</h2>
        </div>
      </div>
      <Footer/>
    </>
  )
}
const Data = [
  {
    img:"./images/1.png",
  },
  {
    img:"./images/2.png",
  },
  {
    img:"./images/3.png", 
  },
  {
    img: "./images/4.png"
  }
]
export default AboutUs