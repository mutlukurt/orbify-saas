import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Users, DollarSign, Target, Zap } from 'lucide-react';

const ForStartups: React.FC = () => {
  const startupBenefits = [
    {
      icon: Rocket,
      title: "Fast Implementation",
      description: "Get up and running in minutes, not weeks. Our startup-friendly setup gets you analyzing data on day one."
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused Analytics",
      description: "Track the metrics that matter for startups: user acquisition, retention, LTV, and product-market fit indicators."
    },
    {
      icon: DollarSign,
      title: "Startup Pricing",
      description: "Special pricing for early-stage companies. Pay as you grow with our flexible, founder-friendly plans."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share insights across your entire team. From founders to developers, everyone stays aligned on key metrics."
    }
  ];

  const metrics = [
    { icon: Target, value: "500+", label: "Startups Using Orbify" },
    { icon: TrendingUp, value: "40%", label: "Average Growth Increase" },
    { icon: Zap, value: "5min", label: "Setup Time" },
    { icon: Users, value: "95%", label: "Team Adoption Rate" }
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
                Built for <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Startups</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                From MVP to scale, Orbify grows with your startup. Get the analytics insights you need 
                to make data-driven decisions and accelerate your growth journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold rounded-full transition-all duration-300">
                  Book Demo
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
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&auto=format" 
                alt="Startup Team"
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

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Why Startups Choose Orbify</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We understand the unique challenges startups face. That's why we've built Orbify to be fast, 
              affordable, and focused on the metrics that drive startup success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startupBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                  <h3 className="text-xl font-bold text-text-primary mb-3">{benefit.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Startup Success Stories</h2>
            <p className="text-xl text-text-secondary">See how other startups are growing with Orbify</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "TechStart Inc.",
                growth: "300% user growth",
                quote: "Orbify helped us identify our best acquisition channels and optimize our funnel.",
                founder: "Sarah Chen, CEO"
              },
              {
                company: "DataFlow Systems",
                growth: "50% cost reduction",
                quote: "We reduced our analytics costs by 50% while getting better insights.",
                founder: "Marcus Johnson, CTO"
              },
              {
                company: "ScaleUp Co.",
                growth: "40% retention increase",
                quote: "The predictive analytics helped us improve user retention significantly.",
                founder: "Emily Rodriguez, Head of Growth"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl"
              >
                <div className="text-2xl font-bold text-purple-light mb-2">{story.growth}</div>
                <h3 className="font-bold text-text-primary mb-3">{story.company}</h3>
                <p className="text-text-secondary mb-4 italic">"{story.quote}"</p>
                <p className="text-sm text-text-secondary">— {story.founder}</p>
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
              Ready to Accelerate Your Startup?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join hundreds of startups using Orbify to make data-driven decisions and grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold text-lg rounded-full transition-all duration-300">
                Talk to Founder
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForStartups;