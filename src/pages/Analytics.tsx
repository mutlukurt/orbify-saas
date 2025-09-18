import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp, Activity, Target, Zap } from 'lucide-react';

const Analytics: React.FC = () => {
  const analyticsFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Dashboards",
      description: "Create stunning, interactive dashboards with drag-and-drop simplicity.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format"
    },
    {
      icon: PieChart,
      title: "Data Visualization",
      description: "Transform complex data into beautiful, easy-to-understand visualizations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format"
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Identify patterns and trends in your data with advanced statistical analysis.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop&auto=format"
    }
  ];

  const metrics = [
    { icon: Activity, value: "99.9%", label: "Data Accuracy" },
    { icon: Zap, value: "<100ms", label: "Query Speed" },
    { icon: Target, value: "50+", label: "Chart Types" },
    { icon: BarChart3, value: "1M+", label: "Data Points/sec" }
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
                Advanced <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Analytics</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Unlock the power of your data with our comprehensive analytics platform. 
                From real-time dashboards to predictive insights, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                  Try Analytics Free
                </button>
                <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold rounded-full transition-all duration-300">
                  View Demo
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format" 
                alt="Analytics Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-glow/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 text-purple-light mx-auto mb-4" />
                  <div className="text-3xl font-bold text-text-primary mb-2">{metric.value}</div>
                  <div className="text-text-secondary">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Analytics That Drive Results</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our analytics platform provides everything you need to understand your data and make informed decisions.
            </p>
          </motion.div>

          <div className="space-y-24">
            {analyticsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="inline-flex p-3 rounded-xl bg-purple-glow/10 border border-purple-glow/20 mb-6">
                      <Icon className="w-8 h-8 text-purple-light" />
                    </div>
                    <h3 className="text-3xl font-bold text-text-primary mb-4">{feature.title}</h3>
                    <p className="text-lg text-text-secondary leading-relaxed">{feature.description}</p>
                  </div>
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="rounded-2xl shadow-xl w-full"
                    />
                  </div>
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
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join thousands of companies using Orbify to make data-driven decisions.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
              Start Your Analytics Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;