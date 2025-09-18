import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Illuminate your data with clarity.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypewriterText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20 gpu-accelerated">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full gpu-accelerated">
        <Spline 
          scene="https://prod.spline.design/1E95kvYiFWEWi7o4/scene.splinecode"
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full gpu-accelerated"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-dark/30 gpu-accelerated" />
      
      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto gpu-accelerated">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 gpu-accelerated"
        >
          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary leading-tight">
            <span className="block">Welcome to</span>
            <span className="inline-block bg-gradient-to-r from-purple-glow to-purple-light px-8 py-4 rounded-full text-white animate-glow">
              Orbify
            </span>
          </h1>
          
          {/* Typewriter tagline */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl text-text-secondary font-medium">
              <span className="inline-block border-r-2 border-purple-glow animate-pulse">
                {typewriterText}
              </span>
            </p>
          </div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Transform your startup's data into actionable insights with our AI-powered analytics dashboard. 
            Make smarter decisions, faster growth, clearer vision.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 smooth-transition gpu-accelerated flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
            </button>
            
            <button className="group flex items-center space-x-3 px-8 py-4 text-text-primary hover:text-white smooth-transition gpu-accelerated">
              <div className="w-12 h-12 rounded-full bg-glass-white border border-glass-border flex items-center justify-center group-hover:bg-purple-glow/20 smooth-transition gpu-accelerated">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium">Watch Demo</span>
            </button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-light">10K+</div>
              <div className="text-text-secondary">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-light">99.9%</div>
              <div className="text-text-secondary">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-light">24/7</div>
              <div className="text-text-secondary">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;