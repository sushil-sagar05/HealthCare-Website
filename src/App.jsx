import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Medicine from './Pages/Medicine'
import Error from './Pages/Error'
import Facilites from './Pages/Facilites'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AboutUs from './Pages/AboutUs'
import Cart from './Pages/Cart'
import PatientRegistration from './Components/PatientRegistration'
import BloodBank from './Pages/BloodBank'
import FAQ from './Pages/FAQ'
import LabTest from './Pages/LabTest'
import Login from './Pages/Login'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Medicine' element={<Medicine/>} />
      <Route path='/Facilites' element={<Facilites/>}/>
      <Route path='/Labtest' element={<LabTest/>} /> 
      <Route path='/AboutUs' element={<AboutUs/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Medicine' element={<Medicine/>} />
     
      <Route path='/PatientRegistration' element={<PatientRegistration/>} />
      <Route path='/BloodBank' element={<BloodBank/>} />
      <Route path='/FAQ' element={<FAQ/>} />
      <Route path='/*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
