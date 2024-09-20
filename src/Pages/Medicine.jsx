import React, { useState ,useEffect} from 'react'
import Header from '../Components/Header'
import MedicineCard from '../Components/MedicineCard';
import MedicineItems from '../Components/MedicineItems';
import Cart from '../Components/CartCompo';
function Medicine() {
  const [data,setData] = useState([])
  async function FetchData () {
    const data = await fetch("https://catalog.sastasundar.com/category/getcategoryProductListing/?cat_id=k54uey&panindia=1&warehouseId=1&pincode=&_t=1726218665037")
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
      <div className="header">
        <span className='fixed right-32 top-20 '>Available Medicine : 543</span>
    
      </div>
</div>
<Cart />
  <MedicineItems/>
 
        
    </>
  )
}

export default Medicine