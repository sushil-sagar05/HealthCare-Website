import React from 'react'
import Header from './Header'

function PatientRegistration() {
  return (
    <>
    <Header/>
   <h2 className='font-extrabold text-2xl mt-3 mb-4 text-center md:text-left'>Registration Form</h2>
    <div className="registration flex flex-col md:flex-row justify-evenly">
        
        <div className="inputs ml-5 flex justify-center">
        <form className="p-6 flex flex-col justify-center w-full md:w-auto">
                            <div className="flex flex-col">
                                <label for="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full md:w-[25vw] mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full md:w-[25vw]  mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    className="w-full md:w-[25vw]  mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label for="Number" className="hidden">
                                  Aadhar Number
                                </label>
                                <input
                                    type="Num"
                                    name="Num"
                                    id="aadhar"
                                    placeholder="Aadhar Number"
                                    className="w-full md:w-[25vw]  mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label for="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="Address"
                                    name="Address"
                                    id="Address"
                                    placeholder="Address"
                                    className="w-full md:w-[25vw]  mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label for="Number" className="hidden">
                                  Age
                                </label>
                                <input
                                    type="Age"
                                    name="Age"
                                    id="Age"
                                    placeholder="Age"
                                    className="w-full md:w-[12.5vw] mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
        </div>
       
    </div>
    </>
  )
}

export default PatientRegistration