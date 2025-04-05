import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import HomePage from "./Components/HomePage"
import { AboutUs } from "./Components/AboutUs"
import { WebDevelopment } from "./Components/WebDevelopment"
import { SoftwareDevelopment } from "./Components/SoftwareDevelopment"
import { DigitalMarketing } from "./Components/DigitalMarketing"


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
