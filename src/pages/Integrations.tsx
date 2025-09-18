import React from 'react';
import { motion } from 'framer-motion';
import { Plug, Database, Cloud, Smartphone, Globe, Zap } from 'lucide-react';

const Integrations: React.FC = () => {
  const integrationCategories = [
    {
      icon: Database,
      title: "Databases",
      description: "Connect to all major databases",
      integrations: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "BigQuery"]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      description: "Seamless cloud integration",
      integrations: ["AWS", "Google Cloud", "Azure", "Heroku", "DigitalOcean", "Vercel"]
    },
    {
      icon: Smartphone,
      title: "Mobile Analytics",
      description: "Track mobile app performance",
      integrations: ["Firebase", "Mixpanel", "Amplitude", "Flurry", "App Annie", "Adjust"]
    },
    {
      icon: Globe,
      title: "Web Analytics",
      description: "Comprehensive web tracking",
      integrations: ["Google Analytics", "Adobe Analytics", "Hotjar", "Crazy Egg", "Segment", "Heap"]
    },
    {
      icon: Zap,
      title: "Marketing Tools",
      description: "Marketing automation platforms",
      integrations: ["HubSpot", "Salesforce", "Mailchimp", "Marketo", "Pardot", "ActiveCampaign"]
    },
    {
      icon: Plug,
      title: "Business Tools",
      description: "Popular business applications",
      integrations: ["Slack", "Jira", "Trello", "Asana", "Notion", "Airtable"]
    }
  ];

  const featuredIntegrations = [
    {
      name: "Google Analytics",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&auto=format",
      description: "Import your GA data seamlessly"
    },
    {
      name: "Salesforce",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&auto=format",
      description: "Sync CRM data automatically"
    },
    {
      name: "Shopify",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&auto=format",
      description: "E-commerce analytics made easy"
    },
    {
      name: "Stripe",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop&auto=format",
      description: "Payment and revenue tracking"
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
            <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
              Seamless <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Integrations</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect Orbify with your existing tools and data sources. 
              Over 100+ integrations available with one-click setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Browse Integrations
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold rounded-full transition-all duration-300">
                Request Integration
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Integrations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">Popular Integrations</h2>
            <p className="text-text-secondary">Connect with the tools you already love</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredIntegrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl hover:border-purple-glow/50 transition-all duration-300"
              >
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg"
                />
                <h3 className="font-semibold text-text-primary mb-2">{integration.name}</h3>
                <p className="text-sm text-text-secondary">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">All Your Tools, One Platform</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Orbify integrates with all the tools in your tech stack, making data consolidation effortless.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => {
              const Icon = category.icon;
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
                  <h3 className="text-xl font-bold text-text-primary mb-3">{category.title}</h3>
                  <p className="text-text-secondary mb-6">{category.description}</p>
                  <div className="space-y-2">
                    {category.integrations.map((integration, integrationIndex) => (
                      <div key={integrationIndex} className="flex items-center text-text-secondary">
                        <div className="w-2 h-2 bg-purple-light rounded-full mr-3"></div>
                        {integration}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Simple Integration Process</h2>
            <p className="text-xl text-text-secondary">Get connected in minutes, not hours</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Choose Integration", description: "Select from our library of 100+ integrations" },
              { step: "2", title: "Authenticate", description: "Securely connect your accounts with OAuth" },
              { step: "3", title: "Start Analyzing", description: "Your data flows automatically into Orbify" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-glow to-purple-light rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
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
              Ready to Connect Your Data?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Start integrating your tools today and see the power of unified analytics.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
              Start Integrating Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;