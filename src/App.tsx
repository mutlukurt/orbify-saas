import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Analytics from './pages/Analytics';
import Integrations from './pages/Integrations';
import API from './pages/API';
import ForStartups from './pages/ForStartups';
import ForEnterprise from './pages/ForEnterprise';
import ForAgencies from './pages/ForAgencies';
import UseCases from './pages/UseCases';
import Pricing from './pages/Pricing';
import Documentation from './pages/Documentation';
import Blog from './pages/Blog';
import HelpCenter from './pages/HelpCenter';
import Community from './pages/Community';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen bg-dark text-text-primary overflow-x-hidden page-transition">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/api" element={<API />} />
        <Route path="/for-startups" element={<ForStartups />} />
        <Route path="/for-enterprise" element={<ForEnterprise />} />
        <Route path="/for-agencies" element={<ForAgencies />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;