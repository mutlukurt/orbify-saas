import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Globe, Lock, Zap, Award } from 'lucide-react';

const ForEnterprise: React.FC = () => {
  const enterpriseFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II, GDPR compliance, and enterprise-grade security controls to protect your sensitive data."
    },
    {
      icon: Users,
      title: "Advanced User Management",
      description: "SSO integration, role-based access control, and team management features for large organizations."
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Multi-region deployment, 99.99% uptime SLA, and dedicated support for mission-critical workloads."
    },
    {
      icon: Lock,
      title: "Data Governance",
      description: "Complete audit trails, data lineage tracking, and compliance reporting for regulated industries."
    }
  ];

  const metrics = [
    { icon: Award, value: "99.99%", label: "Uptime SLA" },
    { icon: Users, value: "10K+", label: "Enterprise Users" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Zap, value: "24/7", label: "Dedicated Support" }
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
                <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Enterprise</span> Analytics
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Scale your analytics infrastructure with enterprise-grade security, compliance, 
                and performance. Built for the world's most demanding organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                  Contact Sales
                </button>
                <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold rounded-full transition-all duration-300">
                  Enterprise Demo
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format" 
                alt="Enterprise Team"
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
            <h2 className="text-4xl font-bold text-text-primary mb-6">Enterprise-Grade Features</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything your enterprise needs for secure, scalable, and compliant analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => {
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

      {/* Compliance Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Compliance & Certifications</h2>
            <p className="text-xl text-text-secondary">Meeting the highest standards for enterprise security</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "SOC 2 Type II", description: "Security & availability" },
              { name: "GDPR", description: "Data protection compliance" },
              { name: "HIPAA", description: "Healthcare data security" },
              { name: "ISO 27001", description: "Information security" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl"
              >
                <Shield className="w-12 h-12 text-purple-light mx-auto mb-4" />
                <h3 className="font-bold text-text-primary mb-2">{cert.name}</h3>
                <p className="text-sm text-text-secondary">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Trusted by Enterprise Leaders</h2>
            <p className="text-xl text-text-secondary">See how Fortune 500 companies use Orbify</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "Global Tech Corp",
                industry: "Technology",
                result: "50% faster insights",
                quote: "Orbify's enterprise features allowed us to consolidate our analytics across 50+ countries while maintaining compliance.",
                executive: "Chief Data Officer"
              },
              {
                company: "Financial Services Inc",
                industry: "Finance",
                result: "99.99% uptime achieved",
                quote: "The security and compliance features were exactly what we needed for our regulated environment.",
                executive: "VP of Analytics"
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
                <div className="text-2xl font-bold text-purple-light mb-2">{story.result}</div>
                <h3 className="font-bold text-text-primary mb-1">{story.company}</h3>
                <p className="text-sm text-text-secondary mb-4">{story.industry}</p>
                <p className="text-text-secondary mb-4 italic">"{story.quote}"</p>
                <p className="text-sm text-text-secondary">— {story.executive}</p>
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
              Ready for Enterprise Analytics?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's discuss how Orbify can meet your enterprise requirements and scale with your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Contact Sales Team
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold text-lg rounded-full transition-all duration-300">
                Schedule Enterprise Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForEnterprise;