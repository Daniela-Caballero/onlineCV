import Menu from './components/menu';
import About from './components/about';
import Education from './components/education'
import Skills from './components/skill';
import WorkExperience from './components/workExperience';
import Contact from './components/contact';
import './App.css';
import { useRef } from 'react';

function App() {

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);

  return (
    <div className="App">
        <Menu aboutRef={aboutRef} educationRef={educationRef} skillsRef={skillsRef} experienceRef={experienceRef}/>
      <header className="App-header">
        <About about={aboutRef}/>
      </header>
      <main className='content'>
        <div className='sticky'>
          <Education education={educationRef}/>
        </div>
        <div>
          <Skills skills={skillsRef}/>
        </div>
        <div>
          <WorkExperience experience={experienceRef}/>
        </div>
      </main>
      <footer><Contact/>


      </footer>
    </div>
  );
}

export default App;
