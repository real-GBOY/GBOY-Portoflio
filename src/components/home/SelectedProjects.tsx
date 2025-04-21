import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import Button from '../ui/Button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'FULL STACK',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Modern e-commerce platform with real-time inventory and secure payments.',
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'FRONTEND',
    image: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Responsive task manager with drag-and-drop functionality.',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    category: 'FRONTEND',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Interactive weather forecasting dashboard with data visualization.',
  },
  {
    id: 4,
    title: 'Blog API',
    category: 'BACKEND',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'RESTful API for blog platform with authentication and comments.',
  }
];

const SelectedProjects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="relative">
            <motion.span 
              className="text-sm text-accent mb-2 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              PORTFOLIO
            </motion.span>
            <AnimatedText 
              text="Some recent work"
              className="heading-lg mb-4"
              once
            />
            <motion.div 
              className="absolute -left-16 -top-8 w-12 h-12"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/5749802/pexels-photo-5749802.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Decorative"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="outline">
              View All Projects
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.id * 0.2 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6">
                <motion.div
                  className="absolute inset-0 bg-black/60 z-10 opacity-0 transition-opacity"
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                />
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: hoveredId === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="absolute top-6 left-6 z-20"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredId === project.id ? 1 : 0,
                    y: hoveredId === project.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium text-accent">
                    {project.category}
                  </span>
                </motion.div>
                <motion.div 
                  className="absolute bottom-6 right-6 z-20"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredId === project.id ? 1 : 0,
                    y: hoveredId === project.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <ArrowUpRight className="text-black" size={20} />
                  </div>
                </motion.div>
              </div>
              
              <h3 className="heading-sm mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="paragraph">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;