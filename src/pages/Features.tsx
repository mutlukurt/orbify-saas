import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Shield, Zap, TrendingUp, Database, Eye, Cpu, Globe, Lock, Rocket, Users } from 'lucide-react';

const Features: React.FC = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze your data patterns and provide actionable recommendations for growth.",
      benefits: ["Predictive analytics", "Automated insights", "Pattern recognition", "Smart recommendations"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor your metrics in real-time with beautiful, interactive dashboards that update instantly.",
      benefits: ["Live data streaming", "Interactive charts", "Custom dashboards", "Mobile responsive"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC 2 Type II, GDPR, and other industry standards.",
      benefits: ["End-to-end encryption", "SOC 2 compliance", "GDPR ready", "Role-based access"]
    }
  ];

  const additionalFeatures = [
    { icon: Zap, title: "Lightning Fast", description: "Process millions of data points in seconds" },
    { icon: TrendingUp, title: "Predictive Analytics", description: "Forecast trends before your competition" },
    { icon: Database, title: "Data Integration", description: "Connect with 100+ data sources seamlessly" },
    { icon: Eye, title: "Visual Analytics", description: "Beautiful charts and interactive visualizations" },
    { icon: Cpu, title: "Smart Processing", description: "AI-powered data processing and analysis" },
    { icon: Globe, title: "Global Scale", description: "Worldwide infrastructure for maximum performance" },
    { icon: Lock, title: "Privacy First", description: "Your data stays secure and private always" },
    { icon: Rocket, title: "Fast Deployment", description: "Get started in minutes, not hours" },
    { icon: Users, title: "Team Collaboration", description: "Share insights and collaborate effectively" }
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
              Powerful <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Everything you need to transform your data into competitive advantage. 
              Built for modern teams who demand excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-purple-glow/10 border border-purple-glow/20 mb-6">
                    <Icon className="w-12 h-12 text-purple-light" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">{feature.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-text-secondary flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-light rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Complete Feature Set</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover all the tools and capabilities that make Orbify the perfect analytics solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl hover:border-purple-glow/50 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-purple-light mb-4" />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Start your free trial today and see how Orbify can transform your data analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold text-lg rounded-full transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;