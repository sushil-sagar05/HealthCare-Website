import React from 'react'
import Header from '../Components/Header'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

function BloodBank() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
         autoplaySpeed: 2000,
         cssEase: "linear"
    
    };
  return (
   <>
   <Header/>
   <div className="container">
    <div className="header bg-[#444444] h-[20vh] w-[100vw]">
        <h2 className='pt-5 font-semibold text-white'>A centralized Blood Inventory Management System for keeping track of the blood stock across numerous blood banks.</h2>
        <ul className='flex justify-center items-center pt-5 gap-10'>
            <li>
                <button className='bg-pink-400 text-white hover:bg-white hover:text-black h-[9vh] w-[13vw] text-xl rounded-full font-bold'>Need Blood</button>
            </li>
            <li>
                <button className='bg-pink-400 text-white hover:bg-white hover:text-black h-[9vh] w-[13vw] text-xl rounded-full font-bold'>Donate Blood</button>
            </li>
           
        </ul>
        
    </div>
    <div className="hero h-[100vh] w-[100vw] bg-white">
       <div className='h-[10vh] w-[100vw] bg-yellow-300'>
       <div className="slider h-[10vh]  w-[90vw]  ml-20 ">
        <Slider {...settings} >
            {
                data.map((d) => (
                    <>
                    <h2 className='bg-yellow-300 rounded-md h-[10vh] pt-5 w-[90vw] text-2xl text-center'>{d.desc}</h2>
                    </>
                ))
            }
            </Slider>
        </div>
        </div> 

        <div className="bottomslider h-[5vh] w-[90vw] mt-12 ml-20  ">
                <div className='text-2xl font-extrabold ml-96 w-[28vw] rounded-3xl '>Compatible Blood Type Donors</div>
              <div className="container flex h-[60vh] w-[100vw] ">
              <div className='h-[53vh] w-[50vw] left mt-8 shadow-md  '>
                <nav className='h-[4vh] w-[50vw] '><ul className='flex bg-pink-300 my-2 font-bold justify-evenly'>
                    <li>Blood type</li>
                    <li>Donate Blood to</li>
                    <li>Recieved Blood From</li>
                   
                    </ul>
                    <hr />
                    <ul className='flex my-2 justify-evenly'>
                    <li>A+</li>
                    <li>	A+ AB+</li>
                    <li>A+ A- O+ O-</li>
                   
                    </ul>
                    <hr />
                    <ul className='flex my-2 justify-evenly'>
                    <li>B+</li>
                    <li>B+ AB+</li>
                    <li>B+ B- O+ O-</li>
               
                    </ul>
                    <hr />
                    <ul className='flex my-2 justify-evenly'>
                    <li>O+</li>
                    <li>O+ A+ B+ AB+</li>
                    <li>O+ O-</li>
                    </ul>
                    <hr />
                    <ul className='flex  my-2 justify-evenly'>
                    <li className='pr-12'>AB+</li>
                    <li>AB+</li>
                    <li>Everyone</li>
                    </ul>
                    <hr />
                    <ul className='flex my-2 justify-evenly'>
                    <li>A-</li>
                    <li>A+ A- AB+ AB-</li>
                    <li>A- O-</li>
                    </ul>
                    <hr />
                    <ul className='flex my-2 justify-evenly'>
                    <li>B-</li>
                    <li>B+ B- AB+ AB-</li>
                    <li>B- O-</li>
                    </ul>
                    <hr />
                    <ul className='flex my-2 justify-center gap-32'>
                    <li className='pr-12'>O-</li>
                    <li className='pr-14'>	Everyone</li>
                    <li>O-</li>
                    </ul>
                    <hr />
                    <ul className='flex my-2 justify-evenly'>
                    <li>AB-</li>
                    <li>AB+ AB-</li>
                    <li>AB- A- B- O-</li>
                    </ul>
                    <hr />

                    </nav>
                </div>
               <div className="right h-[60vh] w-[40vw] ml-10 ">
                <img className='h-[55vh] w-[35vw] pt-12  pl-6'
                src="./images/blood bank.jpg" alt="" />
               </div>

              </div>
               
               
        </div>
    </div>
    <div className="Facts h-[100vh] w-[100vw] ">
            <h2 className='font-extrabold text-2xl'>Learn About Blood Donation</h2>
            <div className="content h-[55vh] w-[75vw]">
    <p className='pl-20 pt-7 text-left'>
    Blood donation is a voluntary process where a person donates their blood to be used for transfusions or made into biopharmaceuticals. Donated blood is vital for medical procedures, including surgeries, cancer treatments, trauma care, and for people with certain chronic conditions like hemophilia or anemia. Blood is typically separated into components—red blood cells, platelets, and plasma—so that it can meet the diverse needs of patients. Since blood has a limited shelf life, regular donations are crucial to maintaining a stable supply in blood banks and hospitals.

The process of donating blood is relatively simple and safe. A donor first undergoes a brief health screening to ensure their eligibility. If eligible, the donor provides about one pint of blood, which is replenished by the body in a few weeks. Blood donation can be done in different forms, such as whole blood donation, plasma donation, or platelet donation, depending on what is most needed at the time. Regular blood donation not only helps save lives but also benefits the donor’s health by stimulating the production of new blood cells.
    </p>
  </div>
</div>
   </div>
   <div className="locate flex gap-14 h-[75vh] w-[100vw]  pl-10 pt-12 ">
    <div className="card1 h-[55vh] w-[25vw]  shadow-md rounded-md bg-[#f8f7f5] hover:border hover:border-solid hover:border-black">
            <div className="heading text-2xl font-bold h-[5vh] w-[20vw]">Locate</div>
        <div className="img h-[30vh] w-[20vw]">
            <img className='h-[30vh] pl-10 mt-4  w-[20vw]' src='./images/locate.png' alt="" />
        </div>
        <div className="desc h-[5vh] w-[25v2] pt-4">
            <p>Locate Blood Camps Nearby your Location</p>
        </div>
        <div className="button"><button className='bg-pink-400 h-[6vh] w-[18vw] rounded-3xl mt-5 text-white hover:text-black hover:bg-white hover:border hover:border-solid hover:border-black '>Locate</button></div>
    </div> 
    <div className="card2 h-[55vh] w-[25vw] shadow-md rounded-md bg-[#f8f7f5] hover:border hover:border-solid hover:border-black hover:mb-10">
            <div className="heading text-2xl font-bold h-[5vh] w-[20vw]">Organise</div>
        <div className="img h-[30vh] w-[20vw]">
            <img className='h-[30vh] pl-10 mt-4  w-[20vw]' src='./images/locate.png' alt="" />
        </div>
        <div className="desc h-[5vh] w-[25v2] pt-4">
            <p>Organise a camp in your location</p>
        </div>
        <div className="button"><button className='bg-pink-400 h-[6vh] w-[18vw] rounded-3xl mt-5 text-white hover:text-black hover:bg-white hover:border hover:border-solid hover:border-black'>Organise</button></div>
    </div>
   </div>
   <div className="faqs h-[110vh] w-[100vw] ">
    <h2 className='font-extrabold text-2xl'>FAQs Related To Blood Donation</h2>
{
        faq.map((e) => (
            <>
            <div className="faq-Container h-[18vh] w-[85vw] bg-white ml-12 mt-5 ">
       <div className="faqCard bg-[#f8f7f5] border border-solid border-pink-400 rounded-md h-[18vh] w-[85vw] ">
       <div className="questions h-[8vh] w-[85vw] border-solid border-black ">
         <p className='text-left  ml-5 pt-4 font-semibold'>{e.questions}</p>
        </div>
        <div className="hr font-extrabold text-black">
            <hr />
        </div>
        <div className="Answer">
        <div className="questions h-[10vh] w-[85vw] ">
         <p className='text-left ml-5 pt-4 font-semibold text-black'>{e.Answer}</p>
        </div>
        </div>
        </div> 
    </div>
            </>
        ))
    }
</div>
   
   </>
  )
}
const data = [
    {
        desc: "A single donation can save up to three lives.",
        
    },
    {
        desc: "According to a 2016 studyTrusted Source, donating blood can help reduce hypertension.",

    },
    {
        desc: "Every year, 14.6 million units of blood are required in India.",
        
    },
    {
        desc: "  Delhi NCR alone faces a shortage of 100,000 units per year.",
        
    },
    {
        desc: "Healthy donors are between the age of 18 to 65 years.",
        
    }
],
faq =[
    {
        questions: "1. Who is eligible to donate blood?",
        Answer: "Generally, donors must be between 17 and 65 years old, weigh at least 110 pounds (50 kg), and be in good health. Some regions may allow 16-year-olds to donate with parental consent, and older individuals may be allowed to donate if they meet health requirement",
    },
    {
        questions: " 2. How often can I donate blood?",
        Answer: "Whole Blood Donation:* Every 56 days (about 8 weeks).- *Plasma Donation:* Every 28 days, up to 13 times per year.- *Platelet Donation:* Every 7 days, but no more than 24 times a year.- *Double Red Cell Donation:* Every 112 days (about 4 months).",
    },
    {
        questions: "3. How long does the donation process take?",
        Answer: "The actual blood collection takes about 10–15 minutes, but the entire process, including registration, screening, and post-donation recovery, can take about an hour.",
    },
    {
        questions: "4. Is blood donation safe?",
        Answer: "Yes, blood donation is very safe. Sterile needles and equipment are used once and then discarded, so there is no risk of contracting a disease from donating blood.",
    },
    {
        questions: " 5. Can I donate blood if I have a cold or the flu?",
        Answer: " No, you should wait until you are fully recovered from a cold, flu, or other illness before donating blood. This ensures that both the donor and the recipient are safe."
    }
   
   
    
]
export default BloodBank