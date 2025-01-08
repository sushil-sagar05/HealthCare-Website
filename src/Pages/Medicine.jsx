import React, { useState ,useEffect} from 'react'
import Header from '../Components/Header'
import MedicineCard from '../Components/MedicineCard';
import MedicineItems from '../Components/MedicineItems';
import Cart from '../Components/CartCompo';
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
    <div className="container h-[15vh] w-[100vw] ">
      <div className="header ">
        <h2 className='font-bold text-6xl underline'>Medicine Section</h2>
        <span className='fixed right-32 top-20 '>Available Medicine : 543</span>
    
      </div>
</div>
<Cart />
  <MedicineItems/>

     </>
  )
}

export default Medicine