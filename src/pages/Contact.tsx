import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedText from '../components/ui/AnimatedText';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formState);
    alert('Message sent! (This is a demo)');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24"
    >
      <Helmet>
        <title>Contact | Stefeny</title>
        <meta name="description" content="Contact Stefeny for design collaborations and projects" />
      </Helmet>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Get In Touch"
            className="heading-lg mb-4"
            once
          />
          <p className="paragraph max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="paragraph">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="paragraph">Currently digital nomad, working remotely from around the world</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="paragraph">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  whileHover={{ y: -5, backgroundColor: 'rgba(204, 255, 0, 0.2)' }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  whileHover={{ y: -5, backgroundColor: 'rgba(204, 255, 0, 0.2)' }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  whileHover={{ y: -5, backgroundColor: 'rgba(204, 255, 0, 0.2)' }}
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card p-8">
              <h2 className="heading-md mb-8">Send Message</h2>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-dark border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white"
                  required
                  whileFocus={{ borderColor: 'rgba(204, 255, 0, 1)' }}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-dark border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white"
                  required
                  whileFocus={{ borderColor: 'rgba(204, 255, 0, 1)' }}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-dark border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white"
                  required
                  whileFocus={{ borderColor: 'rgba(204, 255, 0, 1)' }}
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-dark border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white"
                  required
                  whileFocus={{ borderColor: 'rgba(204, 255, 0, 1)' }}
                />
              </div>
              
              <Button
                type="submit"
                icon={<Send size={18} />}
                className="w-full py-4"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;