import { motion } from 'framer-motion';
import { ArrowDownCircle, Download } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center pt-20">
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent-blue/30 rounded-full filter blur-[100px] z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-[100px] z-0" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        <motion.div 
          className="flex flex-col justify-center order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6">
            <AnimatedText 
              text="I am a junior software developer,"
              className="heading-xl mb-2"
              once
            />
            <AnimatedText 
              text="passionate about web development."
              className="heading-xl"
              once
            />
          </div>
          
          <motion.p 
            className="paragraph mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Hi, I'm Stefeny, a junior software developer with a strong foundation in React and TypeScript. I love building modern web applications and learning new technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button icon={<Download size={18} />}>
              Download CV
            </Button>
            <Button variant="outline">
              View Projects
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 hidden md:flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <ArrowDownCircle className="animate-bounce mr-2 text-accent" size={20} />
            <span className="text-white/70">Scroll down to explore</span>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative flex justify-center items-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            stiffness: 100 
          }}
        >
          <motion.div 
            className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white/10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-blue/20 z-0" />
            <img 
              src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Stefeny" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-black p-4 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ y: -5 }}
          >
            <p className="text-accent font-semibold">1+</p>
            <p className="text-white/70 text-sm">Years Experience</p>
          </motion.div>
          
          <motion.div 
            className="absolute -top-6 -left-6 md:top-10 md:-left-10 bg-black p-4 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ y: -5 }}
          >
            <p className="text-accent font-semibold">10+</p>
            <p className="text-white/70 text-sm">Projects Completed</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;