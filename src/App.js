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

const App = () => {
  return (
    <div className="App bg-neutral-900 min-h-screen">
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/project/forum' element={<ForumPage />} />
          <Route path='/project/klatterdomen' element={<KlatterdomenPage />} />
          <Route path='/project/portfolio' element={<PortfolioPage />} />
          <Route path='/project/marketplace' element={<MarketplacePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
