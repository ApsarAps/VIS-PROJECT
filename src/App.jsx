import { Route, Routes } from "react-router-dom";
import Footer from "./Components/FrontEnd/Footer";
import Navbar from "./Components/FrontEnd/Navbar";
import HomePage from "./Components/FrontEnd/HomePage";
import AboutUs from "./Components/FrontEnd/AboutUs";
import WebDevelopment from "./Components/FrontEnd/WebDevelopment";
import SoftwareDevelopment from "./Components/FrontEnd/SoftwareDevelopment";
import DigitalMarketing from "./Components/FrontEnd/DigitalMarketing";
import ScrollToTop from "./Components/FrontEnd/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
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
  );
}

export default App;
