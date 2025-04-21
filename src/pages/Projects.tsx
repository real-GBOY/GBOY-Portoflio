/** @format */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Github } from "lucide-react";
import AnimatedText from "../components/ui/AnimatedText";
import { projects, categories } from "../data/projects";

const Projects = () => {
	const [activeCategory, setActiveCategory] = useState("All");
	const [hoveredId, setHoveredId] = useState<number | null>(null);

	const filteredProjects =
		activeCategory === "All"
			? projects
			: projects.filter((project) => project.category === activeCategory);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className='pt-32 pb-24 bg-black'>
			<Helmet>
				<title>Projects | GBOY</title>
				<meta
					name='description'
					content='Portfolio projects by GBOY - Full Stack Developer'
				/>
			</Helmet>

			<div className='container mx-auto px-6'>
				<div className='text-center mb-16'>
					<motion.span
						className='text-sm text-accent mb-2 block'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}>
						MY WORK
					</motion.span>
					<AnimatedText
						text='Featured Projects'
						className='heading-lg mb-4'
						once
					/>
					<p className='paragraph max-w-2xl mx-auto'>
						A collection of my recent development projects and design work.
					</p>

					<div className='flex flex-wrap justify-center mt-10 gap-4'>
						{categories.map((category) => (
							<motion.button
								key={category}
								className={`px-6 py-2 rounded-full ${
									activeCategory === category
										? "bg-accent text-black"
										: "bg-bg-card border border-white/10 hover:bg-white/10"
								}`}
								onClick={() => setActiveCategory(category)}
								whileHover={{ y: -2 }}
								whileTap={{ scale: 0.95 }}
								aria-pressed={activeCategory === category}>
								{category}
							</motion.button>
						))}
					</div>
				</div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					layout>
					<AnimatePresence>
						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								className='group'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.5 }}
								layout
								onHoverStart={() => setHoveredId(project.id)}
								onHoverEnd={() => setHoveredId(null)}>
								<div className='relative overflow-hidden rounded-lg aspect-[4/3] mb-6'>
									<motion.div
										className='absolute inset-0 bg-black/60 z-10 opacity-0 transition-opacity'
										animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
									/>
									<motion.img
										src={project.image}
										alt={project.title}
										className='w-full h-full object-cover object-center'
										animate={{
											scale: hoveredId === project.id ? 1.1 : 1,
										}}
										transition={{ duration: 0.6 }}
									/>
									<motion.div
										className='absolute top-6 left-6 z-20'
										initial={{ opacity: 0 }}
										animate={{
											opacity: hoveredId === project.id ? 1 : 0,
											y: hoveredId === project.id ? 0 : 20,
										}}
										transition={{ duration: 0.3 }}>
										<span className='text-sm font-medium text-accent'>
											{project.category}
										</span>
									</motion.div>
									<motion.div
										className='absolute bottom-6 right-6 z-20 flex space-x-4'
										initial={{ opacity: 0 }}
										animate={{
											opacity: hoveredId === project.id ? 1 : 0,
											y: hoveredId === project.id ? 0 : 20,
										}}
										transition={{ duration: 0.3 }}>
										<a
											href={project.github}
											className='w-12 h-12 rounded-full bg-white flex items-center justify-center'
											target='_blank'
											rel='noopener noreferrer'
											aria-label={`View ${project.title} on GitHub`}>
											<Github className='text-black' size={20} />
										</a>
										<a
											href={project.link}
											className='w-12 h-12 rounded-full bg-accent flex items-center justify-center'
											target='_blank'
											rel='noopener noreferrer'
											aria-label={`Visit ${project.title} project`}>
											<ArrowUpRight className='text-black' size={20} />
										</a>
									</motion.div>
								</div>

								<h3 className='heading-sm mb-2 group-hover:text-accent transition-colors'>
									{project.title}
								</h3>

								<div className='flex flex-wrap gap-2 mb-4'>
									{project.tags.map((tag) => (
										<span
											key={tag}
											className='px-3 py-1 bg-white/5 rounded-full text-sm text-white/70'>
											{tag}
										</span>
									))}
								</div>

								<p className='paragraph'>{project.description}</p>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{filteredProjects.length === 0 && (
					<div className='text-center py-20'>
						<p className='paragraph'>No projects found in this category.</p>
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default Projects;
