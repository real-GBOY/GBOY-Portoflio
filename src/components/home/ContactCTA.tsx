import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import Button from '../ui/Button';

const ContactCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-bg-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText 
            text="Let's Create Something Amazing Together"
            className="heading-lg mb-6"
            once
          />
          <p className="paragraph mb-10 max-w-2xl mx-auto">
            Got a project in mind? Let's talk about how we can collaborate to bring your ideas to life.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              icon={<ArrowRight size={18} />}
              className="px-8 py-4 text-lg"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;