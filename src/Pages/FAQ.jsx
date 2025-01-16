import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function FAQ() {
  return (
    <>
      <Header/>
      <div className="container w-full h-full px-4 md:px-0">
        <div className="heading flex justify-center items-center">
          <h2 className='font-extrabold  text-center text-2xl md:text-4xl w-1/2 border-black bg-red-500 border-2 rounded-lg'>FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        {
          data.map((e) => (
            <div className="faq-Container h-[18vh] w-full md:w-[85vw] bg-white ml-1 md:ml-12 mt-5">
              <div className="faqCard bg-[#f8f7f5] border border-solid border-pink-400 hover:border hover:border-solid hover:border-black rounded-md h-[18vh] w-full md:w-[85vw]">
                <div className="questions h-[10vh] w-full md:w-[85vw] border-solid border-black">
                  <p className='text-left ml-5 pt-4 font-semibold'>{e.questions}</p>
                </div>
                <div className="hr font-extrabold text-black">
                  <hr />
                </div>
                <div className="Answer">
                  <div className="questions h-[13vh] w-full md:w-[85vw]">
                    <p className='text-left ml-5 pt-1 font-semibold text-black'>{e.Answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <Footer/>
    </>
  )
}
const data =[
  {
    questions: "How can I onboard my blood bank to on CareSync ?",
    Answer: "Kindly fill the form Click here to fill to form",
  },
  {
    questions : "How to get token or register for OPD?",
    Answer: "On home page click on GET A TOKEN button and further fill the OPD form."
  },
  {
    questions : "How to see lab report.",
    Answer: "Click the lab test you will get current and previous lab report."
  },
  {
    questions : "How to check medicine availablity?",
    Answer :" Click on medicines to check availability and order the prescribed medicines."
  },
  {
    questions : "How to see blood availability?",
    Answer : "On home page click on blood bank button to get near by hospital blood availability."
  },
  {
    questions : "If you find any difficulty on website.",
    Answer : "Send us it to support@caresync.com"
  },
]
export default FAQ