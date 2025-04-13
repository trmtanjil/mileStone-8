import { Suspense } from 'react'
import './App.css'
import DaisyuiNavbar from './assets/components/daisyuiNaveBar/daisyuiNavbar'
import Navbar from './assets/components/navbar/navbar'
import PricingData from './assets/components/pricignData/PricingData'
 

const pricingFechData = fetch('pricingData.json').then(res=>res.json())

function App() {
 

  return (
    <>
     
     <nav>
    
   


      <Navbar></Navbar>

    
      <DaisyuiNavbar>

      </DaisyuiNavbar>
     </nav>
      
      <main>
        <Suspense  fallback={<span className="loading loading-spinner loading-lg"></span>}>

        <PricingData  pricingFechData={pricingFechData}></PricingData>
        </Suspense>

      </main>

    </>
  )
}

export default App
