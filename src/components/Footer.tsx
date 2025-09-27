import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'API Documentation', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Security', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Support', href: '#' },
      { name: 'System Status', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Community', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Compliance', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Mail, href: '#', name: 'Email' }
  ];

  return (
    <footer className="bg-dark-secondary border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">
                  Orbify
                </h3>
                <p className="text-text-secondary mt-4 leading-relaxed">
                  Transform your startup's data into actionable insights with our AI-powered analytics dashboard. 
                  Illuminate your data with clarity.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-text-secondary">
                  <Mail className="w-5 h-5" />
                  <span>hello@orbify.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-text-secondary">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-text-secondary">
                  <MapPin className="w-5 h-5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.name}
                      className="w-10 h-10 bg-glass-white border border-glass-border rounded-lg flex items-center justify-center text-text-secondary hover:text-purple-light hover:border-purple-glow/50 transition-all duration-200 hover:shadow-md hover:shadow-purple-glow/20"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  >
                    <h4 className="text-text-primary font-semibold mb-4">{category}</h4>
                    <ul className="space-y-3">
                      {links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-text-secondary hover:text-purple-light transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-glass-border"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">
                Stay Updated
              </h4>
              <p className="text-text-secondary">
                Get the latest updates, insights, and tips delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-glass-white border border-glass-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-purple-glow/50 focus:ring-1 focus:ring-purple-glow/20 w-full sm:w-80"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-8 border-t border-glass-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-text-secondary text-sm">
              © 2025 Mutlu Kurt. Licensed under MIT.
            </div>
            <div className="flex items-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <span>Crafted with</span>
                <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>in</span>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Istanbul, Turkey</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;