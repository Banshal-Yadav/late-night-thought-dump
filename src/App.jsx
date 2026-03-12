import './App.css'
import { HeroSection } from './HeroSection/Hero'
import { Footer } from './footer/Footer'
import { MainBody } from './main-body/MainBody'
function App() {

  return (
    <>
    <HeroSection heroTitle="brain won't shut up?" />
    
    <MainBody />
    
    <Footer quote="this won't fix you but it might help" />
    
    </>
  )
}

export default App