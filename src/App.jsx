import { useState } from 'react'
import './App.css'
import { HeroSection } from './HeroSection/Hero'
import { Footer } from './footer/Footer'
import { MainBody } from './main/MainBody'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroSection heroTitle="brain won't shut up?" />
    
    <MainBody />
    
    <Footer quote="this won't fix you but it might help" />
    
    </>
  )
}

export default App