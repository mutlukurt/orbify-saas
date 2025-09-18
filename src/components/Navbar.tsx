import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
      setActiveDropdown(null);
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    {
      name: 'Product',
      href: '/features',
      dropdown: [
        { name: 'Features', href: '/features' },
        { name: 'Analytics', href: '/analytics' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'API', href: '/api' }
      ]
    },
    {
      name: 'Solutions',
      href: '/for-startups',
      dropdown: [
        { name: 'For Startups', href: '/for-startups' },
        { name: 'For Enterprise', href: '/for-enterprise' },
        { name: 'For Agencies', href: '/for-agencies' },
        { name: 'Use Cases', href: '/use-cases' }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    {
      name: 'Resources',
      href: '/documentation',
      dropdown: [
        { name: 'Documentation', href: '/documentation' },
        { name: 'Blog', href: '/blog' },
        { name: 'Help Center', href: '/help-center' },
        { name: 'Community', href: '/community' }
      ]
    },
    { name: 'About', href: '/about' }
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition gpu-accelerated ${
      isScrolled 
        ? 'bg-dark/95 backdrop-blur-md shadow-lg' 
        : 'bg-dark/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-glow to-purple-light rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">
                Orbify
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8 gpu-accelerated">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      className="flex items-center space-x-1 text-text-secondary hover:text-white smooth-transition py-2"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      to={item.href}
                      className={`smooth-transition py-2 ${
                        location.pathname === item.href 
                          ? 'text-purple-light' 
                          : 'text-text-secondary hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-dark-secondary/95 backdrop-blur-md border border-glass-border rounded-lg shadow-xl py-2 gpu-accelerated"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className={`block px-4 py-2 hover:bg-glass-white/10 smooth-transition ${
                                location.pathname === dropdownItem.href
                                  ? 'text-purple-light'
                                  : 'text-text-secondary hover:text-white'
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-text-secondary hover:text-white transition-colors duration-200">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 smooth-transition gpu-accelerated">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="text-text-secondary hover:text-white smooth-transition p-2 gpu-accelerated"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-secondary/95 backdrop-blur-md border-t border-glass-border gpu-accelerated"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-text-secondary hover:text-white transition-colors duration-200 py-2"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-2 border-l border-glass-border pl-4"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className={`block transition-colors duration-200 py-1 ${
                                  location.pathname === dropdownItem.href
                                    ? 'text-purple-light'
                                    : 'text-text-secondary hover:text-white'
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block transition-colors duration-200 py-2 font-medium ${
                        location.pathname === item.href
                          ? 'text-purple-light'
                          : 'text-text-secondary hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-glass-border space-y-3">
                <button 
                  className="block w-full text-left text-text-secondary hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </button>
                <button 
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;