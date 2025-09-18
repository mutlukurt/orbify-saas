import React from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, Eye, Award, Briefcase, Target } from 'lucide-react';

const ForAgencies: React.FC = () => {
  const agencyFeatures = [
    {
      icon: Users,
      title: "Multi-Client Management",
      description: "Manage analytics for multiple clients from a single dashboard with white-label options."
    },
    {
      icon: BarChart3,
      title: "Client Reporting",
      description: "Automated, branded reports that showcase your agency's value and client ROI."
    },
    {
      icon: Eye,
      title: "White-Label Solution",
      description: "Fully customizable interface with your agency's branding and domain."
    },
    {
      icon: Award,
      title: "Agency Partner Program",
      description: "Special pricing, dedicated support, and co-marketing opportunities for agencies."
    }
  ];

  const metrics = [
    { icon: Briefcase, value: "200+", label: "Agency Partners" },
    { icon: Users, value: "5K+", label: "Client Accounts" },
    { icon: Target, value: "85%", label: "Client Retention" },
    { icon: Award, value: "30%", label: "Revenue Increase" }
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
                Perfect for <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Agencies</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Scale your agency with white-label analytics solutions. Manage multiple clients, 
                create branded reports, and demonstrate clear ROI to grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                  Join Partner Program
                </button>
                <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold rounded-full transition-all duration-300">
                  Agency Demo
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format" 
                alt="Agency Team"
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
            <h2 className="text-4xl font-bold text-text-primary mb-6">Built for Agency Success</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything your agency needs to deliver exceptional analytics services to your clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agencyFeatures.map((feature, index) => {
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

      {/* Partner Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Agency Partner Benefits</h2>
            <p className="text-xl text-text-secondary">Exclusive perks for our agency partners</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Special Pricing",
                description: "Up to 40% discount on all plans for your clients",
                benefit: "40% OFF"
              },
              {
                title: "Dedicated Support",
                description: "Priority support channel with dedicated account manager",
                benefit: "24/7 SUPPORT"
              },
              {
                title: "Co-Marketing",
                description: "Joint marketing opportunities and case study features",
                benefit: "MARKETING"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-8 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl"
              >
                <div className="text-2xl font-bold text-purple-light mb-4">{benefit.benefit}</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Agency Success Stories</h2>
            <p className="text-xl text-text-secondary">How agencies are growing with Orbify</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                agency: "Digital Growth Agency",
                clients: "50+ clients",
                growth: "200% revenue growth",
                quote: "Orbify's white-label solution helped us scale our analytics offering and increase client retention.",
                owner: "Marketing Director"
              },
              {
                agency: "Performance Marketing Co",
                clients: "30+ clients",
                growth: "150% client base growth",
                quote: "The multi-client dashboard saves us hours every week and our clients love the branded reports.",
                owner: "Agency Owner"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl"
              >
                <div className="text-2xl font-bold text-purple-light mb-2">{story.growth}</div>
                <h3 className="font-bold text-text-primary mb-1">{story.agency}</h3>
                <p className="text-sm text-text-secondary mb-4">{story.clients}</p>
                <p className="text-text-secondary mb-4 italic">"{story.quote}"</p>
                <p className="text-sm text-text-secondary">— {story.owner}</p>
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
              Ready to Scale Your Agency?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join our partner program and start offering world-class analytics to your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Become a Partner
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold text-lg rounded-full transition-all duration-300">
                Schedule Agency Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForAgencies;