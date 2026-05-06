import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar'
import CustomDrawer from './components/CustomDrawer'
import s from './components/CustomDrawer.module.scss';
import Heading from './components/Heading'
import HeroPage from './components/HeroPage'
import Workflow from './components/Workflow'
import Services from './components/Services'
import Guarantee from './components/Guarantee'
import AboutUs from './components/AboutUs'
import Portfolio from './components/Portfolio'
import Callback from './components/Callback'
import SuccessPage from './components/SuccessPage'
import Footer from './components/Footer'

function App() {
  return(
    <>
     <BrowserRouter>
        <Navbar />
        <CustomDrawer className={s.drawer} />
        <Heading />
        <HeroPage />
        <Services />
        <Workflow />
        <Guarantee />
        <AboutUs />
        <Portfolio />
        <Callback />
        <Routes>
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>


  )
  
}

export default App;
