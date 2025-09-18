import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 5 team members",
        "10 data sources",
        "Basic analytics",
        "Email support",
        "30-day data retention",
        "Mobile app access"
      ],
      popular: false,
      icon: Zap
    },
    {
      name: "Professional",
      description: "Everything teams need to scale",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Up to 25 team members",
        "Unlimited data sources",
        "Advanced AI insights",
        "Priority support",
        "1-year data retention",
        "API access",
        "Custom dashboards",
        "White-label options"
      ],
      popular: true,
      icon: Star
    },
    {
      name: "Enterprise",
      description: "For organizations at scale",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Unlimited team members",
        "Enterprise data sources",
        "Custom AI models",
        "Dedicated support",
        "Unlimited data retention",
        "Advanced API access",
        "Custom integrations",
        "SSO & advanced security",
        "On-premise deployment"
      ],
      popular: false,
      icon: Star
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your team. Scale as you grow, with no hidden fees or surprises.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-glass-white backdrop-blur-sm border border-glass-border rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual 
                  ? 'bg-purple-glow text-white shadow-md' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isAnnual 
                  ? 'bg-purple-glow text-white shadow-md' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 17%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const period = isAnnual ? 'year' : 'month';
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-glow to-purple-light text-white text-sm font-semibold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`relative h-full p-8 bg-glass-white backdrop-blur-sm border rounded-2xl transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-purple-glow shadow-purple-glow/20' 
                    : 'border-glass-border hover:border-purple-glow/50'
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="mb-4">
                      <Icon className={`w-12 h-12 mx-auto ${plan.popular ? 'text-purple-light' : 'text-text-secondary'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                    <p className="text-text-secondary mb-6">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-text-primary">${price}</span>
                        <span className="text-text-secondary ml-1">/{period}</span>
                      </div>
                      {isAnnual && (
                        <div className="text-sm text-green-400 mt-1">
                          Save ${(plan.monthlyPrice * 12) - plan.annualPrice} per year
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-glow to-purple-light text-white hover:shadow-lg hover:shadow-purple-glow/25'
                        : 'bg-glass-white border border-glass-border text-text-primary hover:border-purple-glow/50 hover:text-white'
                    }`}>
                      Get Started
                    </button>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-purple-light mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Glow effect for popular plan */}
                  {plan.popular && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-glow/10 to-purple-light/10 pointer-events-none" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary">
            All plans include 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;