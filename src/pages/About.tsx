/** @format */

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Download, Award, Clock, Coffee, Users, Code } from "lucide-react";
import AnimatedText from "../components/ui/AnimatedText";
import Button from "../components/ui/Button";

const About = () => {
	const skills = [
		{
			name: "HTML",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			category: "frontend",
		},
		{
			name: "CSS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
			category: "frontend",
		},
		{
			name: "SASS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
			category: "frontend",
		},
		{
			name: "JAVASCRIPT",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			category: "frontend",
		},
		{
			name: "REACT JS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			category: "frontend",
		},
		{
			name: "GITHUB",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
			category: "tools",
		},
		{
			name: "NODE JS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			category: "backend",
		},
		{
			name: "FIREBASE",
			icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
			category: "backend",
		},
		{
			name: "MONGODB",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			category: "backend",
		},
		{
			name: "DOCKERS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
			category: "tools",
		},
	];

	const experiences = [
		{
			id: 1,
			year: "2024 - Present",
			position: "Full Stack Developer",
			company: "Freelance ",
			description:
				"Developing scalable web apps using React, Node.js, Firebase, and MongoDB. Led impactful projects through Enactus, focusing on sustainability and innovation.",
		},
		{
			id: 2,
			year: "2024 - Present",
			position: "Full Stack Developer Intern",
			company: "Route Academy",
			description:
				"Built responsive UIs with React and Bootstrap. Collaborated on real-world projects, improving performance and accessibility in team-based environments.",
		},
		{
			id: 3,
			year: "2024 - Present",
			position: "Project Management & Development Leader",
			company: "Enactus Menoufia",
			description:
				"Led tech development for award-winning social entrepreneurship initiatives. Focused on creating web platforms that solve real community problems.",
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className='pt-32 pb-24 bg-black'>
			<Helmet>
				<title>About | GBOY</title>
				<meta
					name='description'
					content='About GBOY - Full Stack Developer with experience in building modern web applications'
				/>
			</Helmet>

			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}>
						<h1 className='heading-lg mb-6'>About Me</h1>
						<p className='paragraph mb-6'>
							I'm Golden, a full-stack developer passionate about building
							efficient, user-friendly web applications. I specialize in using
							modern technologies like React, Node.js, MongoDB, and Firebase to
							create scalable and maintainable solutions.
						</p>
						<p className='paragraph mb-6'>
							My development journey has been driven by hands-on projects, where
							I’ve built responsive websites, functional APIs, and real-time
							applications. I focus on writing clean, reusable code and crafting
							intuitive user interfaces with performance in mind.
						</p>
						<p className='paragraph mb-8'>
							I’m currently enhancing my problem-solving skills using C++,
							exploring AI integration in web apps, and learning German. I’m
							always eager to level up, experiment with new tools, and
							contribute to impactful tech-driven solutions.
						</p>

						<Button
							icon={<Download size={18} />}
							onClick={() => {
								const link = document.createElement("a");
								link.href = "/CV.pdf";
								link.download = "GBOY_CV.pdf";
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);
							}}>
							Download CV
						</Button>
					</motion.div>

					<motion.div
						className='relative'
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<div className='relative z-10 rounded-xl overflow-hidden h-[500px]'>
							<img
								src='https://i.postimg.cc/NG3tcVmM/com-wallpaper.jpg'
								alt='About Main Image'
								className='w-full h-full object-cover'
							/>
						</div>

						<div className='absolute -bottom-6 -left-6 md:-left-10 bg-black p-6 rounded-lg border border-white/10 z-20 max-w-xs'>
							<div className='flex justify-around mb-4'>
								<div className='flex flex-col items-center'>
									<Award size={24} className='text-accent mb-2' />
									<p className='text-2xl font-bold'>2+</p>
									<p className='text-white/70 text-sm'>Years Exp.</p>
								</div>
								<div className='flex flex-col items-center'>
									<Clock size={24} className='text-accent mb-2' />
									<p className='text-2xl font-bold'>10+</p>
									<p className='text-white/70 text-sm'>Projects</p>
								</div>
								{/* <div className='flex flex-col items-center'>
									<Coffee size={24} className='text-accent mb-2' />
									<p className='text-2xl font-bold'>∞</p>
									<p className='text-white/70 text-sm'>Coffees</p>
								</div> */}
							</div>
						</div>

						<div className='absolute -top-6 -right-6 md:-right-10 bg-black p-4 rounded-lg border border-white/10 z-20'>
							<Users size={24} className='text-accent mb-2' />
							<p className='text-xl font-bold'>7+</p>
							<p className='text-white/70 text-sm'>Happy Clients</p>
						</div>
					</motion.div>
				</div>

				<motion.div
					className='mt-32'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<div className='relative'>
						{/* <div className='absolute inset-0 bg-[#FFD700] skew-y-6 -z-10 opacity-10'></div> */}
						<div className='py-20'>
							<AnimatedText
								text='What I do'
								className='heading-lg mb-12 text-center'
								once
							/>

							<p className='text-center text-white/70 max-w-3xl mx-auto mb-16 paragraph'>
								I am skilled in full-stack web development using technologies
								like HTML, CSS, JavaScript, React, and Node.js, with hands-on
								experience building responsive and dynamic websites
							</p>

							<div className='flex items-center gap-4 mb-8'>
								<div className='text-[#0EA5E9] font-bold text-4xl'>Skills</div>
								<div className='flex-grow h-[2px] bg-white/10 self-center'></div>
							</div>

							<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
								{skills.map((skill) => (
									<motion.div
										key={skill.name}
										className='bg-bg-card border border-white/5 rounded-lg p-6 flex flex-col items-center justify-center group hover:border-[#0EA5E9]/30 transition-all duration-200'
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.2 }}
										whileHover={{ scale: 1.05 }}>
										<div className='w-16 h-16 mb-4 transition-transform duration-200'>
											<img
												src={skill.icon}
												alt={skill.name}
												className='w-full h-full object-contain'
											/>
										</div>
										<h3 className='text-sm font-medium text-white/80 text-center group-hover:text-[#0EA5E9] transition-colors duration-200'>
											{skill.name}
										</h3>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					className='mt-32'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<AnimatedText
						text='Experience'
						className='heading-lg mb-12 text-center'
						once
					/>

					<div className='max-w-3xl mx-auto'>
						{experiences.map((exp, index) => (
							<motion.div
								key={exp.id}
								className='mb-12 relative pl-8 border-l-2 border-white/10'
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}>
								<div className='absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-accent' />
								<span className='text-white/70'>{exp.year}</span>
								<h3 className='heading-sm mt-2 mb-1'>{exp.position}</h3>
								<h4 className='text-accent font-medium'>{exp.company}</h4>
								<p className='paragraph mt-2'>{exp.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default About;
