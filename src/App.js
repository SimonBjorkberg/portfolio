import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Info from './pages/Info';

const App = () => {

  return (
    <div className="App font-mono bg-neutral-900 min-h-screen">
      <Navbar />
      <div className='mx-auto w-[80%]'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/info' element={<Info />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
