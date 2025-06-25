import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCommunities from './components/FeaturedCommunities';
import Features from './components/Features';
import Footer from './components/Footer';
import CommunityPage from './pages/CommunityPage';
import './App.css';

function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Header />
      <Hero />
      <FeaturedCommunities />
      <Features />
      <Footer />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="font-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/community/:id" element={<CommunityPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;