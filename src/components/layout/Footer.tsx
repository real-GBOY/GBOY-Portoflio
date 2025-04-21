import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      className="bg-bg-dark py-16 border-t border-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={itemVariants} className="flex flex-col space-y-6">
            <Logo />
            <p className="text-white/70 max-w-xs">
              Crafting digital experiences that blend creativity with functionality.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="text-white/70 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="/projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col space-y-6">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="text-white/70">Feel free to reach out if you want to collaborate or just say hi!</p>
            <a href="mailto:hello@example.com" className="text-accent hover:underline">hello@example.com</a>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/10 text-center text-white/60 flex flex-col sm:flex-row justify-between items-center"
        >
          <p>&copy; {year} All Rights Reserved.</p>
          <p className="flex items-center mt-4 sm:mt-0">
            Made with <Heart size={16} className="mx-1 text-error" /> by Stefeny
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;