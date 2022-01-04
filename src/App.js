import './app.scss';

import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Hero />
        <Portfolio />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
