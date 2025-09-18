import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, ShoppingCart, Smartphone, Globe, Heart } from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Track user acquisition, retention, and growth metrics to optimize your funnel.",
      metrics: ["User acquisition cost", "Lifetime value", "Churn rate", "Growth rate"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: Users,
      title: "Product Analytics",
      description: "Understand how users interact with your product to improve engagement.",
      metrics: ["Feature adoption", "User flows", "Session duration", "Drop-off points"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Analytics",
      description: "Optimize your online store with detailed sales and customer insights.",
      metrics: ["Conversion rate", "Cart abandonment", "Revenue per visitor", "Product performance"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: Smartphone,
      title: "Mobile App Analytics",
      description: "Track mobile app performance and user behavior across platforms.",
      metrics: ["App installs", "In-app purchases", "Push notification CTR", "App store ratings"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: Globe,
      title: "Marketing Analytics",
      description: "Measure campaign performance and optimize marketing spend across channels.",
      metrics: ["ROAS", "Attribution modeling", "Channel performance", "Campaign ROI"],
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Monitor customer health and identify opportunities for expansion.",
      metrics: ["NPS score", "Customer satisfaction", "Support ticket volume", "Expansion revenue"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&auto=format"
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
              Analytics <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Use Cases</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover how teams across different industries and functions use Orbify 
              to drive growth and make data-driven decisions.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
              Explore All Use Cases
            </button>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl overflow-hidden hover:border-purple-glow/50 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex p-2 rounded-lg bg-purple-glow/20 backdrop-blur-sm border border-purple-glow/30">
                        <Icon className="w-6 h-6 text-purple-light" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-3">{useCase.title}</h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">{useCase.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-text-primary">Key Metrics:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {useCase.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 bg-purple-light rounded-full mr-2"></div>
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Industry Examples</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See how different industries leverage Orbify for their specific analytics needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { industry: "SaaS", example: "Track MRR, churn, and feature adoption" },
              { industry: "E-commerce", example: "Monitor sales, inventory, and customer behavior" },
              { industry: "Media", example: "Analyze content performance and audience engagement" },
              { industry: "Healthcare", example: "Patient outcomes and operational efficiency" },
              { industry: "Finance", example: "Risk assessment and customer analytics" },
              { industry: "Education", example: "Student performance and course effectiveness" },
              { industry: "Gaming", example: "Player retention and monetization metrics" },
              { industry: "Travel", example: "Booking patterns and customer satisfaction" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl text-center hover:border-purple-glow/50 transition-all duration-300"
              >
                <h3 className="font-bold text-text-primary mb-2">{item.industry}</h3>
                <p className="text-sm text-text-secondary">{item.example}</p>
              </motion.div>
            ))}
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
              Ready to Apply These Use Cases?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Start implementing these analytics use cases in your organization today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold text-lg rounded-full transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;