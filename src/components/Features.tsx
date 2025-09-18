import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Shield, Zap, TrendingUp, Database } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze your data patterns and provide actionable recommendations for growth.",
      gradient: "from-blue-500 to-purple-glow"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor your metrics in real-time with beautiful, interactive dashboards that update instantly.",
      gradient: "from-purple-glow to-pink-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC 2 Type II, GDPR, and other industry standards.",
      gradient: "from-green-500 to-purple-glow"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process millions of data points in seconds with our optimized infrastructure and caching systems.",
      gradient: "from-yellow-500 to-purple-glow"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and identify opportunities before your competition with advanced predictive models.",
      gradient: "from-purple-glow to-indigo-500"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect with 100+ data sources and tools you already use. No complex setup required.",
      gradient: "from-teal-500 to-purple-glow"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Everything you need to turn your data into competitive advantage. 
            Built for modern startups who move fast and think big.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl hover:border-purple-glow/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-glow/10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-purple-glow/10 border border-purple-glow/20">
                      <Icon className="w-8 h-8 text-purple-light" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-white transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-200">
                    {feature.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-glow/5 to-purple-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;