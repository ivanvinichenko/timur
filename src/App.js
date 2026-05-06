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
import Footer from './components/Footer'

function App() {
  return(
    <>
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
        <Footer />
    </>


  )
  
}

export default App;
