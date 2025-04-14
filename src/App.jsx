import { Suspense } from 'react'
import './App.css'
import DaisyuiNavbar from './assets/components/daisyuiNaveBar/daisyuiNavbar'
import Navbar from './assets/components/navbar/navbar'
import PricingData from './assets/components/pricignData/PricingData'
import ResultChart from './assets/components/resultChart/ResultChart'
import Toltip from './assets/components/resultChart/Toltip'
import axios from 'axios'
 


const pricingFechData = fetch('pricingData.json').then(res=>res.json())
const markDataAxios = axios.get('markData.json')

function App() {
 

  return (
    <>
     
     <nav>
    
   


      <Navbar></Navbar>

    
      {/* <DaisyuiNavbar>

      </DaisyuiNavbar> */}
     </nav>
      
      <main>
        <Suspense  fallback={<span className="loading loading-spinner loading-lg"></span>}>

        <PricingData  pricingFechData={pricingFechData}></PricingData>
        </Suspense>

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarkData markDataAxios={markDataAxios}></MarkData>
        </Suspense>

        {/* <ResultChart></ResultChart> */}
        <Toltip></Toltip>
      </main>

    </>
  )
}

export default App
