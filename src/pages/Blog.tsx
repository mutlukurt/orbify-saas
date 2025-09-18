import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    title: "The Future of Analytics: AI-Powered Insights for Modern Businesses",
    excerpt: "Discover how artificial intelligence is revolutionizing the way companies analyze data and make strategic decisions.",
    author: "Sarah Chen",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "AI & Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format"
  };

  const blogPosts = [
    {
      title: "10 Essential Metrics Every Startup Should Track",
      excerpt: "Learn about the key performance indicators that can make or break your startup's success.",
      author: "Marcus Johnson",
      date: "March 12, 2025",
      readTime: "6 min read",
      category: "Startups",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format"
    },
    {
      title: "Data Privacy in Analytics: A Complete Guide",
      excerpt: "Navigate the complex world of data privacy regulations while maintaining effective analytics.",
      author: "Emily Rodriguez",
      date: "March 10, 2025",
      readTime: "12 min read",
      category: "Privacy & Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&auto=format"
    },
    {
      title: "Building Real-Time Dashboards: Best Practices",
      excerpt: "Tips and tricks for creating dashboards that provide instant insights and drive action.",
      author: "David Park",
      date: "March 8, 2025",
      readTime: "10 min read",
      category: "Product",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format"
    },
    {
      title: "Customer Analytics: Understanding Your Users Better",
      excerpt: "Deep dive into customer behavior analysis and how to use insights to improve retention.",
      author: "Lisa Thompson",
      date: "March 5, 2025",
      readTime: "7 min read",
      category: "Customer Success",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop&auto=format"
    },
    {
      title: "The ROI of Analytics: Measuring Success",
      excerpt: "How to calculate and demonstrate the return on investment of your analytics initiatives.",
      author: "Alex Kumar",
      date: "March 3, 2025",
      readTime: "9 min read",
      category: "Business Strategy",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop&auto=format"
    },
    {
      title: "Integrating Analytics into Your Workflow",
      excerpt: "Seamlessly incorporate data-driven decision making into your daily business operations.",
      author: "Sarah Chen",
      date: "March 1, 2025",
      readTime: "5 min read",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&auto=format"
    }
  ];

  const categories = [
    "All Posts", "AI & Analytics", "Startups", "Privacy & Security", 
    "Product", "Customer Success", "Business Strategy", "Productivity"
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
              Orbify <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Insights, tutorials, and best practices for modern analytics. 
              Stay updated with the latest trends in data science and business intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl overflow-hidden hover:border-purple-glow/50 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-glow text-white text-sm font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                  <span className="bg-purple-glow/10 text-purple-light px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-text-secondary" />
                    <span className="text-text-secondary">{featuredPost.author}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-purple-light hover:text-purple-glow transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === 0 
                    ? 'bg-purple-glow text-white' 
                    : 'bg-glass-white border border-glass-border text-text-secondary hover:border-purple-glow/50 hover:text-purple-light'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl overflow-hidden hover:border-purple-glow/50 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-glow/20 backdrop-blur-sm text-purple-light text-xs font-medium px-2 py-1 rounded-full border border-purple-glow/30">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-text-secondary mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-purple-light transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-text-secondary" />
                      <span className="text-sm text-text-secondary">{post.author}</span>
                    </div>
                    <button className="text-purple-light hover:text-purple-glow transition-colors duration-200">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Tag className="w-16 h-16 text-purple-light mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Subscribe to our newsletter and get the latest analytics insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-glass-white border border-glass-border rounded-full text-text-primary placeholder-text-secondary focus:outline-none focus:border-purple-glow/50 focus:ring-1 focus:ring-purple-glow/20"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;