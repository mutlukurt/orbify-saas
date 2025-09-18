import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "Orbify transformed how we understand our users. The AI insights helped us increase retention by 40% in just three months.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      company: "DataFlow Systems",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "The real-time analytics and predictive modeling capabilities are game-changing. We can now make data-driven decisions instantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Growth",
      company: "ScaleUp Co.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "Implementation was seamless and the support team is incredible. Orbify is now central to all our growth strategies.",
      rating: 5
    },
    {
      name: "David Park",
      role: "VP of Engineering",
      company: "BuildFast",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "Finally, a platform that scales with us. The enterprise features and security standards exceed our expectations.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Founder",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "Orbify's dashboard is beautiful and intuitive. Our entire team adopted it within days, not weeks.",
      rating: 5
    },
    {
      name: "Alex Kumar",
      role: "Data Scientist",
      company: "MetricsFirst",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format",
      content: "The AI recommendations are surprisingly accurate. It's like having a senior data scientist on the team 24/7.",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
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
            Loved by Thousands
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Join over 10,000 teams who trust Orbify to power their data-driven decisions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-light mb-2">4.9/5</div>
            <div className="text-text-secondary">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-light mb-2">10K+</div>
            <div className="text-text-secondary">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-light mb-2">99.9%</div>
            <div className="text-text-secondary">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-light mb-2">24/7</div>
            <div className="text-text-secondary">Support Available</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl hover:border-purple-glow/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-glow/10">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-purple-light" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-text-secondary leading-relaxed mb-6 group-hover:text-text-primary transition-colors duration-200">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-glow/20"
                  />
                  <div>
                    <div className="font-semibold text-text-primary">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-glow/5 to-purple-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-text-secondary mb-6">
              Start your free trial today and see why teams choose Orbify for their analytics needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;