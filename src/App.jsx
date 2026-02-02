import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import VideoComp from './components/VideoComp';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Resources from './components/Resources';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/room/:roomID" element={<VideoComp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
