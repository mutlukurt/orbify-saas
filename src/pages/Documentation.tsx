import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Play, Search, FileText, Zap } from 'lucide-react';

const Documentation: React.FC = () => {
  const docSections = [
    {
      icon: Play,
      title: "Getting Started",
      description: "Quick setup guide to get you up and running in minutes",
      articles: ["Installation", "First Dashboard", "Basic Configuration", "Sample Data"]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation with examples and SDKs",
      articles: ["Authentication", "Endpoints", "Rate Limits", "Error Codes"]
    },
    {
      icon: FileText,
      title: "User Guides",
      description: "Step-by-step tutorials for common use cases",
      articles: ["Creating Dashboards", "Setting Up Alerts", "Data Export", "Team Management"]
    },
    {
      icon: Zap,
      title: "Integrations",
      description: "Connect Orbify with your favorite tools and platforms",
      articles: ["Google Analytics", "Salesforce", "Slack", "Webhooks"]
    }
  ];

  const popularArticles = [
    { title: "How to create your first dashboard", views: "15K views", category: "Getting Started" },
    { title: "Setting up real-time alerts", views: "12K views", category: "User Guides" },
    { title: "API authentication guide", views: "10K views", category: "API Reference" },
    { title: "Connecting Google Analytics", views: "8K views", category: "Integrations" },
    { title: "Understanding data retention", views: "7K views", category: "User Guides" },
    { title: "Troubleshooting common issues", views: "6K views", category: "Support" }
  ];

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
                <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Documentation</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Everything you need to get the most out of Orbify. From quick start guides 
                to advanced API documentation, we've got you covered.
              </p>
              
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-glass-white border border-glass-border rounded-full text-text-primary placeholder-text-secondary focus:outline-none focus:border-purple-glow/50 focus:ring-1 focus:ring-purple-glow/20"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                  Quick Start Guide
                </button>
                <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold rounded-full transition-all duration-300">
                  API Reference
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format" 
                alt="Documentation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-glow/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Browse Documentation</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Find the information you need, organized by topic and difficulty level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl hover:border-purple-glow/50 transition-all duration-300 group"
                >
                  <div className="inline-flex p-3 rounded-xl bg-purple-glow/10 border border-purple-glow/20 mb-6">
                    <Icon className="w-8 h-8 text-purple-light" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{section.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">{section.description}</p>
                  
                  <div className="space-y-3">
                    {section.articles.map((article, articleIndex) => (
                      <a
                        key={articleIndex}
                        href="#"
                        className="flex items-center text-text-secondary hover:text-purple-light transition-colors duration-200 group-hover:translate-x-1 transition-transform"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-light rounded-full mr-3"></div>
                        {article}
                      </a>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Popular Articles</h2>
            <p className="text-xl text-text-secondary">Most viewed documentation articles</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl hover:border-purple-glow/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-purple-light font-medium bg-purple-glow/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-text-secondary">{article.views}</span>
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-purple-light transition-colors duration-200">
                  {article.title}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Book className="w-16 h-16 text-purple-light mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold text-lg rounded-full transition-all duration-300">
                Join Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;