import React, { useState } from 'react'
import Header from '../Components/Header'
import Report from '../Components/Report'
import BloodReport from '../Components/BloodReport'
import { IoMdCloseCircleOutline } from "react-icons/io";
function LabTest() {
  const[active,setActive] = useState("false")
  return (
    <>
  <Header/>
  <div className={`chatbot fixed p-5 right-0 top-32 w-[100vw] h-[100vh] bg-white rounded-md shadow-md ${active ? "translate-x-full" : "translate-x-0"} transition-all duration-500 z-50`} >
   <div className='flex  justify-evenly gap-20 mb-3'>
   <span className='font-semibold w-[20vw] '>C.T. Scan Report</span>
  
    <IoMdCloseCircleOutline
    onClick={()=>setActive(!active)}
   className=' font-extrabold text-3xl cursor-pointer ml-2'
   />
   </div>
   <hr />
   <div className="content">
    <div className="name">Patient Name: <span>Sojay Mondal</span></div>
    <div className="header flex justify-around mt-10">
      <div className="date">
        <span>Date : 12/09/2024</span>
      </div>
      <div className="doctorName">
        <span>Doctor : Dr.Misa Bharti</span>
      </div>
    </div>
    <h2 className='text-left font-bold'>Title: CT Scan</h2>
    <h2 className='text-left font-bold'>Part:</h2>
   <h2 className='text-left font-bold '>Technique: Serial axial sections of the brain were obtained from the base of skull to the vertex</h2>
   <h2 className='text-left font-bold'>Findings: Subscenteric acute lacunar infract notede involving right lentiform</h2>
   <p className='text-left mt-5'>No evidence for fracture. Vertebral bodies are normally aligned. Vertebral body heights are preserved. Normal cord signal without evidence of syringomyelia. The cranio-vertebral junction appears normal. Visualized soft tissues of the cervical neck appear normal. Level-by-level degenerative findings as follows: C2-C3: No significant spinal canal stenosis or neural foraminal narrowing. [Mild / Mod / Severe] Disc desiccation with diffuse [Disc / Annular] bulge and focal [Anterior / Posterior (Central / Paracentral / Foraminal /Extraforaminal)] disc [Protrusion / Extrusion]. Associated end-plate changes include [Modic I, II, III changes / End-plate irregularity / Spondylosis (osteophytes) / Degenerative instability (vertebral body height loss / Listhesis (Type I (above or below degen level) / Type II (at degen level)]. These findings result in [Mild / Mod / Severe] spinal canal stenosis and [Mild / Mod / Severe] [Right/Left] neural foraminal narrowing. C3-C4: No significant spinal canal stenosis or neural foraminal narrowing. C4-C5: No significant spinal canal stenosis or neural foraminal narrowing. C5-C6: No significant spinal canal stenosis or neural foraminal narrowing. C6-C7: No significant spinal canal stenosis or neural foraminal narrowing. C7-T1: No significant spinal canal stenosis or neural foraminal narrowing. Impression. No vesical calculi, wall thickening or mass lesion.</p>
   <h2 className='text-right font-bold mt-10'>Docotor's Signature</h2>
   </div>
  </div>
    <div className="container  ml-10 mt-10 h-[75vh] w-[95vw]  ">
    <h2 className='text-3xl font-extrabold text-left ml-32 pt-16'>Lab Tests</h2>
   <div className="tests h-[55vh] w-[85vw] ml-32 ">
        <h2 className='mb-5'>Your Report</h2>
        <hr />
        <div className="testsCard mt-5 bg-[#f8f7f5] rounded-md h-[37vh] w-[20vw] hover:border hover:border-solid hover:border-black  ml-5">
          <div className="card">
            <div className="img h-[20vh] w-[15vw] ">
            <img className='h-[20vh] rounded-md w-[15vw]' src="https://render.fineartamerica.com/images/rendered/small/print/images-square-real/6-secondary-brain-cancers-ct-scan-du-cane-medical-imaging-ltd.jpg" alt="" />
            </div>
           <div className="content">
           <div className="name">
            <h2 className='text-xl font-bold text-left'>C.T. Scan</h2>
           </div>
           <div className="desc text-left">
            <button
            onClick={()=> setActive(!active)}
            className='font-semibold mt-2 bg-pink-400 text-white hover:bg-white hover:text-black h-[5vh] w-[9vw] rounded-3xl   hover:border hover:border-solid hover:border-black'>View Full Report</button>
           </div>
            </div> 
            
          </div>
        </div>
   </div>
   <Report/>
    </div>
    </>
  )
}

export default LabTest