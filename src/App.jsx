import './App.css'

import Header from './components/Header'
import FeaturedBox from './components/FeaturedBox'
import AboutBox from './components/AboutBox'
import ProjectsBox from './components/ProjectsBox'
import ContractBox from './components/ContractBox'
import Footer from './components/Footer'
import { useEffect } from 'react'
import Typed from 'typed.js'
import ScrollReveal from 'scrollreveal'

function App() {

  useEffect(() => {

    // Change link
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollY = window.scrollY;
      sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50, 
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        }else{ 
          document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
      });
    }

    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true
    });

    // Featured Box
    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", {delay:100});
    sr.reveal(".featured-text-info", {delay: 200});
    sr.reveal(".featured-text-btn", {delay: 200});
    sr.reveal(".social_icons", {delay:200});
    sr.reveal(".featured-image", {delay: 200});

    // Project
    sr.reveal(".project-box", {interval: 200});

    // Heading
    sr.reveal(".top-header", {});

    // Left-Right Animation
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true
    });
    
    srLeft.reveal(".about-info", {delay: 200});
    srLeft.reveal(".contact-info", {delay: 100});

    // Right-Left Animation
    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true
    });

    srRight.reveal(".skills-box", {delay: 200});
    srRight.reveal(".form-control", {delay: 200});

    // ScrollRevea
    window.addEventListener('scroll', scrollActive);
    

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
  },[]);

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
