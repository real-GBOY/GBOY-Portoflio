import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'CEO at TechFlow',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'Stefeny is an exceptional designer who truly understands both aesthetics and functionality. The dashboard she designed for us increased our user engagement by 45%.',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    position: 'Product Manager at DesignHub',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'Working with Stefeny was a game-changer for our product. Her attention to detail and user-centered approach transformed our app into something our customers love to use.',
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'Founder of AppLabs',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'Stefeny has a unique ability to turn complex problems into simple, elegant solutions. Her designs are not just beautiful—they solve real business challenges.',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/20 rounded-full filter blur-[120px] z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedText 
            text="What My Clients Say"
            className="heading-lg mb-4"
            once
          />
          <p className="paragraph max-w-2xl mx-auto">
            Feedback from people I've worked with on various projects.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 card p-8"
            >
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 mx-auto">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-accent rounded-full p-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Quote size={24} className="text-black" />
                  </motion.div>
                </div>
                <div className="text-center mt-6">
                  <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
                  <p className="text-white/70">{testimonials[current].position}</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="text-lg md:text-xl italic text-white/90 leading-relaxed">
                  "{testimonials[current].text}"
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-10 gap-4">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;