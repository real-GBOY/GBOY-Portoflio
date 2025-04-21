import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/">
      <motion.div 
        className="flex items-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="w-10 h-10 bg-accent rounded-full flex items-center justify-center"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          <Code size={20} className="text-black" />
        </motion.div>
        <span className="text-xl font-bold tracking-tight">GBOY</span>
      </motion.div>
    </Link>
  );
};

export default Logo;