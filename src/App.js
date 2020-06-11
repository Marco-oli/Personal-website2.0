import React from 'react';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div style={{position: "relative", overflow: 'hidden'}}> 
      <Home />
      <NavBar />
      <About />
      <Projects />
      <Contact  />
    </div>
  );
}

export default App;
