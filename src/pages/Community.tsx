import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Award, Calendar, Github, Slack } from 'lucide-react';

const Community: React.FC = () => {
  const communityStats = [
    { icon: Users, value: "15K+", label: "Community Members" },
    { icon: MessageSquare, value: "2.5K", label: "Monthly Discussions" },
    { icon: Award, value: "500+", label: "Solutions Shared" },
    { icon: Calendar, value: "50+", label: "Events This Year" }
  ];

  const communityChannels = [
    {
      icon: Slack,
      title: "Slack Community",
      description: "Join our active Slack workspace for real-time discussions and support",
      members: "8K+ members",
      activity: "Very Active"
    },
    {
      icon: Github,
      title: "GitHub Discussions",
      description: "Technical discussions, feature requests, and open source contributions",
      members: "3K+ developers",
      activity: "Active"
    },
    {
      icon: MessageSquare,
      title: "Forum",
      description: "Long-form discussions, tutorials, and community-driven content",
      members: "12K+ members",
      activity: "Very Active"
    }
  ];

  const upcomingEvents = [
    {
      title: "Analytics Best Practices Webinar",
      date: "March 25, 2025",
      time: "2:00 PM EST",
      type: "Webinar",
      attendees: 150
    },
    {
      title: "Community Meetup - San Francisco",
      date: "April 2, 2025",
      time: "6:00 PM PST",
      type: "In-Person",
      attendees: 50
    },
    {
      title: "Developer Workshop: API Integration",
      date: "April 10, 2025",
      time: "11:00 AM EST",
      type: "Workshop",
      attendees: 75
    }
  ];

  const featuredMembers = [
    {
      name: "Alex Chen",
      role: "Data Scientist",
      company: "TechCorp",
      contributions: "45 solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      name: "Sarah Johnson",
      role: "Analytics Manager",
      company: "StartupXYZ",
      contributions: "38 solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      name: "Mike Rodriguez",
      role: "Product Manager",
      company: "GrowthCo",
      contributions: "32 solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format"
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
            <Users className="w-16 h-16 text-purple-light mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
              Join Our <span className="bg-gradient-to-r from-purple-glow to-purple-light bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect with fellow analytics professionals, share knowledge, get help, 
              and stay updated with the latest trends in data analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Join Community
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold rounded-full transition-all duration-300">
                Browse Discussions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon;
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
                  <div className="text-3xl font-bold text-text-primary mb-2">{stat.value}</div>
                  <div className="text-text-secondary">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Community Channels</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Choose the platform that works best for you to connect with the community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="p-8 bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl hover:border-purple-glow/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-purple-glow/10 border border-purple-glow/20 mb-6">
                    <Icon className="w-8 h-8 text-purple-light" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{channel.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">{channel.description}</p>
                  <div className="flex justify-between items-center text-sm text-text-secondary mb-6">
                    <span>{channel.members}</span>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                      {channel.activity}
                    </span>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                    Join Channel
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Upcoming Events</h2>
            <p className="text-xl text-text-secondary">Join us for webinars, workshops, and meetups</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-glass-white backdrop-blur-sm border border-glass-border rounded-xl hover:border-purple-glow/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-glow/10 text-purple-light text-sm font-medium px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                  <span className="text-sm text-text-secondary">{event.attendees} attending</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-text-secondary mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Community Champions</h2>
            <p className="text-xl text-text-secondary">Meet our most active community contributors</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-8 bg-glass-white backdrop-blur-sm border border-glass-border rounded-2xl hover:border-purple-glow/50 transition-all duration-300"
              >
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-purple-glow/20"
                />
                <h3 className="text-xl font-bold text-text-primary mb-2">{member.name}</h3>
                <p className="text-text-secondary mb-1">{member.role}</p>
                <p className="text-sm text-text-secondary mb-4">{member.company}</p>
                <div className="bg-purple-glow/10 text-purple-light text-sm font-medium px-3 py-1 rounded-full inline-block">
                  {member.contributions}
                </div>
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
              Ready to Join the Community?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Connect with thousands of analytics professionals and accelerate your learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-glow to-purple-light text-white font-semibold text-lg rounded-full hover:shadow-lg hover:shadow-purple-glow/25 transition-all duration-300">
                Join Community Now
              </button>
              <button className="px-8 py-4 border border-glass-border text-text-primary hover:border-purple-glow/50 font-semibold text-lg rounded-full transition-all duration-300">
                Explore Resources
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;