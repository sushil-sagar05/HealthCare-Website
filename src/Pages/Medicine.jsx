import React, { useState ,useEffect} from 'react'
import Header from '../Components/Header'
import MedicineCard from '../Components/MedicineCard';
import MedicineItems from '../Components/MedicineItems';
import Cart from '../Components/CartCompo';
import Footer from '../Components/Footer';
function Medicine() {
  const [data,setData] = useState([])
  async function FetchData () {
    const data = await fetch(`process.env.${Website}`);
    const res =  await data.json();
    console.log(res.results[0].Products)
    setData(res.results[0].Products)
  }
  useEffect(()=> {
    FetchData()
  },[])
  return (
    <>
      <Header/>
      <div className="container h-[15vh] w-full px-4 md:px-0">
        <div className="header">
          <h2 className='font-bold text-2xl md:text-4xl lg:text-6xl underline'>Medicine Section</h2>
          <span className='fixed right-4 md:right-32 top-20 text-sm md:text-base'>Available Medicine : 543</span>
        </div>
      </div>
      <Cart />
      <MedicineItems/>
      <Footer/>
    </>
  )
}

export default Medicine