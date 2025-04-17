import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd385938b-ccdc-4d36-a4af-0b8012471f75',
          ...formData,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black py-20">
      <motion.div 
        className="container mx-auto px-4 md:px-8 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 pb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-purple-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-transparent
                           transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-purple-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white 
                           focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-transparent
                           transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-purple-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white 
                         focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-transparent
                         transition-all duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-purple-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white 
                         focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-transparent
                         transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium
                        hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400"
                >
                  Message sent successfully!
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact; 