import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Download, Award, Clock, Coffee, Users } from 'lucide-react';
import AnimatedText from '../components/ui/AnimatedText';
import Button from '../components/ui/Button';

const About = () => {
  const skills = [
    'UI/UX Design', 'Web Design', 'Mobile Design', 'Prototyping',
    'Figma', 'Adobe XD', 'Sketch', 'Illustrator',
    'HTML/CSS', 'JavaScript', 'React', 'Design Systems'
  ];
  
  const experiences = [
    {
      id: 1,
      year: '2020 - Present',
      position: 'Senior Product Designer',
      company: 'Freelance',
      description: 'Working with clients worldwide to design intuitive and engaging digital products.',
    },
    {
      id: 2,
      year: '2017 - 2020',
      position: 'Lead UI/UX Designer',
      company: 'DesignStudio Inc.',
      description: 'Led the design team in creating user-centered design solutions for various clients.',
    },
    {
      id: 3,
      year: '2013 - 2017',
      position: 'UI Designer',
      company: 'Creative Solutions',
      description: 'Designed web and mobile interfaces for clients across different industries.',
    },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24"
    >
      <Helmet>
        <title>About | Stefeny</title>
        <meta name="description" content="About Stefeny - Product Designer with 12+ years of experience" />
      </Helmet>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-lg mb-6">About Me</h1>
            <p className="paragraph mb-6">
              I'm Stefeny, a product designer with 12+ years of experience specializing in creating intuitive and engaging digital experiences. I work at the intersection of design, technology, and business strategy to craft products that users love.
            </p>
            <p className="paragraph mb-6">
              My approach to design focuses on understanding user needs and business goals to create solutions that are both beautiful and functional. I believe that great design goes beyond aesthetics—it solves real problems and creates meaningful experiences.
            </p>
            <p className="paragraph mb-8">
              When I'm not designing, you can find me exploring new places, reading design books, or experimenting with new design tools and techniques.
            </p>
            
            <Button icon={<Download size={18} />}>
              Download CV
            </Button>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Stefeny Working"
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-black p-6 rounded-lg border border-white/10 z-20 max-w-xs">
              <div className="flex justify-between mb-4">
                <div className="flex flex-col items-center">
                  <Award size={24} className="text-accent mb-2" />
                  <p className="text-2xl font-bold">12+</p>
                  <p className="text-white/70 text-sm">Years Exp.</p>
                </div>
                <div className="flex flex-col items-center">
                  <Clock size={24} className="text-accent mb-2" />
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-white/70 text-sm">Projects</p>
                </div>
                <div className="flex flex-col items-center">
                  <Coffee size={24} className="text-accent mb-2" />
                  <p className="text-2xl font-bold">∞</p>
                  <p className="text-white/70 text-sm">Coffees</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 md:-right-10 bg-black p-4 rounded-lg border border-white/10 z-20">
              <Users size={24} className="text-accent mb-2" />
              <p className="text-xl font-bold">50+</p>
              <p className="text-white/70 text-sm">Happy Clients</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText 
            text="My Skills"
            className="heading-lg mb-12 text-center"
            once
          />
          
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="px-6 py-3 rounded-full bg-bg-card border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(204, 255, 0, 0.2)' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText 
            text="Experience"
            className="heading-lg mb-12 text-center"
            once
          />
          
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="mb-12 relative pl-8 border-l-2 border-white/10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-accent" />
                <span className="text-white/70">{exp.year}</span>
                <h3 className="heading-sm mt-2 mb-1">{exp.position}</h3>
                <h4 className="text-accent font-medium">{exp.company}</h4>
                <p className="paragraph mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;