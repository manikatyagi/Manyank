
import styles from './App.module.css'
import {Navbar} from "./components/Navbar/Navbar"
import {Intro} from "./components/intro/intro"
import {AboutMe} from "./components/aboutMe/aboutMe"
import { Skills } from './components/Skills/Skills';
import {Projects} from "./components/projects/Projects"
import { Contact } from './components/contact/Contact';
import { Education } from './components/education/education';
import { Experience } from './components/Experience/Experience';

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App
