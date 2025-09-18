import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Zap, Book, Terminal } from 'lucide-react';

const API: React.FC = () => {
  const apiFeatures = [
    {
      icon: Code,
      title: "RESTful API",
      description: "Clean, intuitive REST endpoints with comprehensive documentation and examples."
    },
    {
      icon: Database,
      title: "Real-time Data",
      description: "Access your analytics data in real-time with WebSocket connections."
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "OAuth 2.0 and API key authentication with rate limiting and monitoring."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Sub-100ms response times with global CDN and intelligent caching."
    }
  ];

  const codeExample = `// Initialize Orbify API client
const orbify = new OrbifyAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.orbify.ai/v1'
});

// Get analytics data
const analytics = await orbify.analytics.get({
  dateRange: '30d',
  metrics: ['users', 'sessions', 'revenue'],
  dimensions: ['source', 'medium']
});

// Create custom dashboard
const dashboard = await orbify.dashboards.create({
  name: 'Revenue Dashboard',
  widgets: [
    {
      type: 'line-chart',
      metric: 'revenue',
      timeframe: '7d'
    }
  ]
});`;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">API</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Build custom integrations and applications with our comprehensive API. 
                Access all your analytics data programmatically with enterprise-grade reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                  Get API Key
                </button>
                <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold rounded-full transition-all duration-300">
                  View Documentation
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-dark-secondary border border-glass-border rounded-2xl p-6 font-mono text-sm">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-text-secondary">orbify-api.js</span>
                </div>
                <pre className="text-text-secondary overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">API Features</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything you need to build powerful integrations and custom applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl hover:border-purple-glow/50 transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl bg-purple-glow/10 border border-purple-glow/20 mb-6">
                    <Icon className="w-8 h-8 text-purple-light" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex p-3 rounded-xl bg-purple-glow/10 border border-purple-glow/20 mb-6">
                <Book className="w-8 h-8 text-purple-light" />
              </div>
              <h2 className="text-4xl font-bold text-text-primary mb-6">Comprehensive Documentation</h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Our API documentation includes detailed guides, code examples, and interactive playground 
                to help you get started quickly and build with confidence.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Interactive API explorer",
                  "Code examples in multiple languages",
                  "Detailed endpoint documentation",
                  "Authentication guides",
                  "Rate limiting information",
                  "Error handling best practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-text-secondary">
                    <div className="w-2 h-2 bg-purple-light rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Explore Documentation
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format" 
                alt="API Documentation"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Official SDKs</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Use our official SDKs to integrate Orbify into your applications with ease.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "JavaScript", version: "v2.1.0", downloads: "50K+" },
              { name: "Python", version: "v1.8.0", downloads: "30K+" },
              { name: "PHP", version: "v1.5.0", downloads: "20K+" },
              { name: "Ruby", version: "v1.3.0", downloads: "15K+" }
            ].map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl text-center hover:border-purple-glow/50 transition-all duration-300"
              >
                <Terminal className="w-8 h-8 text-purple-light mx-auto mb-4" />
                <h3 className="font-bold text-text-primary mb-2">{sdk.name}</h3>
                <p className="text-text-secondary text-sm mb-2">{sdk.version}</p>
                <p className="text-purple-light text-sm">{sdk.downloads} downloads</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Get your API key and start integrating Orbify into your applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Get API Key
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold text-lg rounded-full transition-all duration-300">
                View Examples
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default API;