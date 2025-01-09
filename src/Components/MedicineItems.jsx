import React from 'react'
import MedicineData from '../Data/MedicineData'
import MedicineCard from './MedicineCard'

function MedicineItems() {
  return (
 <>
 <div className="cardcontainer flex flex-wrap justify-center w-full gap-4">
{MedicineData.map((Medicine) => (
    <MedicineCard
    key={Medicine.id}
    id={Medicine.id}
    name={Medicine.name}
    img={Medicine.img}
    price={Medicine.price}
    />
))}

 </div>
 </>
  )
}

export default MedicineItems