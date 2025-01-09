import React, { useState, useEffect } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import BloodReport from './BloodReport';

function Report() {
    const [activeReport, setActiveReport] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setActiveReport(false);
            } else {
                setActiveReport(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className={`chatbot fixed p-5 right-0 top-52 w-full  h-[50vh] bg-white rounded-md shadow-md ${activeReport ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
                <div className='flex mb-3'>
                    <span className='font-semibold w-full'>Previous Report</span>
                    <IoMdCloseCircleOutline
                        onClick={() => setActiveReport(!activeReport)}
                        className='font-extrabold text-3xl cursor-pointer ml-2'
                    />
                </div>
                <hr />
                <div className="content">
                    <ul className=' '>
                        <li className='bg-[#f8f7f5] flex h-8 w-96 min-[12vw] text-left rounded-3xl my-10'>
                            <span className='font-bold ml-4  text-xl'>Blood Test</span>
                            <button className='text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black h-[5vh] rounded-3xl bg-pink-400 w-1/2 min-w-[8vw] ml-9'>View Report</button>
                        </li>
                        <li className='bg-[#f8f7f5] flex h-[5vh] w-96 min-[12vw] text-left rounded-3xl my-10'>
                            <span className='font-bold ml-4 text-xl'>EndoScopy</span>
                            <button className='h-[5vh] rounded-3xl text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black bg-pink-400 w-1/2 min-w-[8vw] ml-9'>View Report</button>
                        </li>
                    </ul>
                </div>
            </div>
            <button
                onClick={() => setActiveReport(!activeReport)}
                className='h-[7vh]  w-1/2 bg-pink-400 rounded-3xl text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black'>View previous Report</button>
        </>
    )
}

export default Report