import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Globe, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Data-Driven",
      description: "We believe in the power of data to transform businesses and drive meaningful decisions."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Our customers' success is our success. We build products that solve real problems."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product design to customer support."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building tools that help businesses worldwide make better decisions."
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and transparent business practices."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in analytics and AI."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Analytics at TechCorp. 10+ years in data science and business intelligence.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face&auto=format"
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer with expertise in distributed systems and machine learning infrastructure.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Product leader with 8+ years building analytics tools at scale for enterprise customers.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face&auto=format"
    },
    {
      name: "David Park",
      role: "VP of Engineering",
      bio: "Full-stack engineer passionate about building reliable, scalable systems that users love.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format"
    }
  ];

  const milestones = [
    { year: "2022", event: "Orbify founded in San Francisco" },
    { year: "2023", event: "Raised $5M Series A funding" },
    { year: "2023", event: "Reached 1,000 customers" },
    { year: "2024", event: "Launched AI-powered insights" },
    { year: "2024", event: "Expanded to 50+ countries" },
    { year: "2025", event: "10,000+ active users milestone" }
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50+", label: "Countries" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
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
                About <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Orbify</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                We're on a mission to democratize data analytics and make powerful insights 
                accessible to every business, regardless of size or technical expertise.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Founded in 2022 by a team of data scientists and engineers from leading tech companies, 
                Orbify was born from the frustration of seeing great businesses make poor decisions 
                due to lack of proper analytics tools.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-glow/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-light mb-2">{stat.value}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Target className="w-16 h-16 text-purple-light mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                To empower every business with the analytics tools they need to make data-driven decisions, 
                grow faster, and compete in the modern economy. We believe that powerful analytics shouldn't 
                be limited to large enterprises with massive budgets.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Globe className="w-16 h-16 text-purple-light mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-text-primary mb-6">Our Vision</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                A world where every business decision is backed by data, where insights are accessible 
                to everyone, and where the power of analytics drives innovation and growth across all 
                industries and geographies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Our Values</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The principles that guide everything we do at Orbify.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl hover:border-purple-glow/50 transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl bg-purple-glow/10 border border-purple-glow/20 mb-6">
                    <Icon className="w-8 h-8 text-purple-light" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Meet Our Team</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The passionate people behind Orbify's mission to democratize analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl hover:border-purple-glow/50 transition-all duration-300"
              >
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-glow/20"
                />
                <h3 className="text-lg font-bold text-text-primary mb-2">{member.name}</h3>
                <p className="text-purple-light font-medium mb-3">{member.role}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Our Journey</h2>
            <p className="text-xl text-text-secondary">Key milestones in Orbify's growth story</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-6"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-glow to-purple-light rounded-full flex items-center justify-center text-white font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1 p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl">
                  <p className="text-text-primary font-medium">{milestone.event}</p>
                </div>
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
              Join Us on Our Mission
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Whether you're a customer, partner, or potential team member, we'd love to have you be part of our journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold text-lg rounded-full transition-all duration-300">
                View Open Positions
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;