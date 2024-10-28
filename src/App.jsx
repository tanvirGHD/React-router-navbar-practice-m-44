
import './App.css'
import LineChart from './Components/LineChart/LineChart'
// import Features from './Components/Features/Features'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      {/* <Features></Features> */}
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
