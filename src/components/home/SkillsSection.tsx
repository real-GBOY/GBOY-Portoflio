import { motion } from 'framer-motion';
import { 
  Code, Database, Globe, Terminal,
  Laptop, Server, Braces, GitBranch
} from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const skills = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: <Code size={32} className="text-accent" />,
    description: 'Building responsive web apps with React and TypeScript.',
  },
  {
    id: 2,
    title: 'Backend Basics',
    icon: <Server size={32} className="text-accent" />,
    description: 'Working with Node.js and Express for simple APIs.',
  },
  {
    id: 3,
    title: 'Database Management',
    icon: <Database size={32} className="text-accent" />,
    description: 'Basic SQL and working with MongoDB.',
  },
  {
    id: 4,
    title: 'Version Control',
    icon: <GitBranch size={32} className="text-accent" />,
    description: 'Git workflow and collaboration on GitHub.',
  },
  {
    id: 5,
    title: 'Web Technologies',
    icon: <Globe size={32} className="text-accent" />,
    description: 'HTML5, CSS3, and modern JavaScript.',
  },
  {
    id: 6,
    title: 'Command Line',
    icon: <Terminal size={32} className="text-accent" />,
    description: 'Comfortable with basic terminal operations.',
  },
  {
    id: 7,
    title: 'Modern Tools',
    icon: <Laptop size={32} className="text-accent" />,
    description: 'Experience with Vite, npm, and modern dev tools.',
  },
  {
    id: 8,
    title: 'Clean Code',
    icon: <Braces size={32} className="text-accent" />,
    description: 'Writing maintainable and well-documented code.',
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 bg-bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText 
            text="My Skills & Knowledge"
            className="heading-lg mb-4"
            once
          />
          <p className="paragraph max-w-2xl mx-auto">
            Here are the technologies and skills I've learned during my journey as a junior developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="card hover:border-accent/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: skill.id * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="mb-6"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="heading-sm mb-2">{skill.title}</h3>
              <p className="paragraph">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;