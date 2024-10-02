import './App.css'

import Header from './components/Header'
import FeaturedBox from './components/FeaturedBox'
import AboutBox from './components/AboutBox'
import ProjectsBox from './components/ProjectsBox'
import ContractBox from './components/ContractBox'
import Footer from './components/Footer'
import { useEffect } from 'react'
import Typed from 'typed.js'

function App() {

  useEffect(() => {

    /** Type Effect  */
    const typingEffect = new Typed(".typedText", {
      strings:["Lecturer", "Student", "Back-End", "Font-End"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    });
    return () => {
      typingEffect.destroy();
    }
  },[])

  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <FeaturedBox />
        <AboutBox />
        <ProjectsBox />
        <ContractBox />
      </main>
      <Footer />
 </div>
  )
}

export default App
