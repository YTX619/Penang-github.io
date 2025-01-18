import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Food from './pages/Food';
import Spots from './pages/Spots';
import SpotDetail from './pages/SpotDetail';
import Hotels from './pages/Hotels';
import HotelDetail from './pages/HotelDetail';
import Culture from './pages/Culture';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/spots" element={<Spots />} />
          <Route path="/spots/:id" element={<SpotDetail />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetail />} />
          <Route path="/culture" element={<Culture />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 