import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Info from './pages/Info';
import ForumPage from './pages/ForumPage';
import KlatterdomenPage from './pages/KlatterdomenPage';
import PortfolioPage from './pages/PortfolioPage';
import MarketplacePage from './pages/MarketplacePage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <div className="App bg-neutral-950 overflow-hidden bg-dot-grid">
      <div className='gradient-bg'>
        <div className='gradients-container'>
          <div className='g1'></div>
          <div className='g2'></div>
          <div className='g3'></div>
          <div className='g4'></div>
          <div className='g5'></div>
        </div>
      </div>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/project/forum' element={<ForumPage />} />
          <Route path='/project/klatterdomen' element={<KlatterdomenPage />} />
          <Route path='/project/portfolio' element={<PortfolioPage />} />
          <Route path='/project/marketplace' element={<MarketplacePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
