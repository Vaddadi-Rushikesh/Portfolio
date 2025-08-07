
import {ReactLenis} from 'lenis/react';
  
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { Education, Internships } from './components/EducationInternships';
import Qualifications from './components/Qualifications';

const App =() =>{

  return (
    <ReactLenis root>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Skill/>
      <Qualifications/>
      <Work/>
      <Contact/>
    </main>
    <Footer/>
    </ReactLenis>
  );

}

export default App;