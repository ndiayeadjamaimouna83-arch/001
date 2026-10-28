import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import InfoPerso from './InfoPerso'
import Competences from './Competences'
import Experiences from './Experiences'

function App() {
  return(
    <div className="cv">
      <InfoPerso />
      <Competences />
      <Experiences />

    </div>
  );
  
  
}

export default App;
