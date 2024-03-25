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
    <div className="App bg-neutral-900 from-black via-black via-60% to-neutral-900 to-90% bg-gradient-to-t">
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
