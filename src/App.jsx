import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WeightManagement from './pages/WeightManagement';
import SportsNutrition from './pages/SportsNutrition';
import GutHealth from './pages/GutHealth';
import HormonalBalance from './pages/HormonalBalance';
import './index.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos/controle-de-peso" element={<WeightManagement />} />
          <Route path="/servicos/nutricao-esportiva" element={<SportsNutrition />} />
          <Route path="/servicos/saude-intestinal" element={<GutHealth />} />
          <Route path="/servicos/equilibrio-hormonal" element={<HormonalBalance />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
