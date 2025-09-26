import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Search, MessageCircle, Book, Video, Mail } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of Orbify",
      articles: 12,
      color: "bg-purple-glow"
    },
    {
      icon: MessageCircle,
      title: "Account & Billing",
      description: "Manage your account and subscription",
      articles: 8,
      color: "bg-purple-light"
    },
    {
      icon: Video,
      title: "Features & Usage",
      description: "Make the most of Orbify's features",
      articles: 15,
      color: "bg-purple-glow"
    },
    {
      icon: Mail,
      title: "Integrations",
      description: "Connect your tools and data sources",
      articles: 10,
      color: "bg-purple-light"
    }
  ];

  const popularArticles = [
    { title: "How to create your first dashboard", category: "Getting Started", helpful: 245 },
    { title: "Setting up real-time alerts", category: "Features", helpful: 198 },
    { title: "Connecting Google Analytics", category: "Integrations", helpful: 167 },
    { title: "Understanding your billing cycle", category: "Billing", helpful: 134 },
    { title: "Sharing dashboards with your team", category: "Features", helpful: 112 },
    { title: "Troubleshooting data sync issues", category: "Support", helpful: 89 }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 2 hours",
      action: "Send Email"
    },
    {
      icon: Video,
      title: "Schedule Call",
      description: "Book a one-on-one session",
      availability: "Business hours",
      action: "Book Call"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HelpCircle className="w-16 h-16 text-purple-light mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
              Help <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Find answers to your questions, learn how to use Orbify effectively, 
              and get the support you need to succeed.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and more..."
                className="w-full pl-14 pr-6 py-4 bg-glass-white border border-glass-border rounded-full text-text-primary placeholder-text-secondary focus:outline-none focus:border-purple-glow/50 focus:ring-1 focus:ring-purple-glow/20 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Browse by Category</h2>
            <p className="text-xl text-text-secondary">Find the help you need, organized by topic</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl hover:border-purple-glow/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`inline-flex p-4 rounded-2xl ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-purple-light transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-text-secondary mb-4">{category.description}</p>
                  <span className="text-sm text-purple-light font-medium">
                    {category.articles} articles
                  </span>
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
            <p className="text-xl text-text-secondary">Most helpful articles from our community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl hover:border-purple-glow/50 transition-all duration-300 group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary group-hover:text-purple-light transition-colors duration-200 mb-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <span className="bg-purple-glow/10 text-purple-light px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span>{article.helpful} found this helpful</span>
                  </div>
                </div>
                <div className="ml-4 text-text-secondary group-hover:text-purple-light transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Still Need Help?</h2>
            <p className="text-xl text-text-secondary">Our support team is here to assist you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center p-8 bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl hover:border-purple-glow/50 transition-all duration-300"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-purple-glow/10 border border-purple-glow/20 mb-6">
                    <Icon className="w-8 h-8 text-purple-light" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{option.title}</h3>
                  <p className="text-text-secondary mb-4">{option.description}</p>
                  <p className="text-sm text-purple-light mb-6">{option.availability}</p>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                    {option.action}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-text-secondary">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How do I get started with Orbify?",
                answer: "Getting started is easy! Sign up for a free trial, connect your data sources, and create your first dashboard in minutes."
              },
              {
                question: "What data sources can I connect?",
                answer: "Orbify supports 100+ integrations including Google Analytics, Salesforce, Shopify, and many more popular tools."
              },
              {
                question: "Is my data secure?",
                answer: "Yes, we use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Absolutely! You can cancel your subscription at any time with no cancellation fees or long-term commitments."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-3">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;