import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="App h-fit mx-auto font-mono bg-neutral-900">
      <div className='w-[80%] h-full mx-auto'>
        <Navbar />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
