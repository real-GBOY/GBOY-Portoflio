/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedText from "../ui/AnimatedText";
import Button from "../ui/Button";
import { projects } from "../../data/projects";

const SelectedProjects = () => {
	const [hoveredId, setHoveredId] = useState<number | null>(null);
	const featuredProjects = projects.slice(0, 4);

	return (
		<section className='py-24 bg-black'>
			<div className='container mx-auto px-6'>
				<div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-16'>
					<div className='relative'>
						<motion.span
							className='text-sm text-accent mb-2 block'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}>
							PORTFOLIO
						</motion.span>
						<AnimatedText
							text='Some recent work'
							className='heading-lg mb-4'
							once
						/>
						{/* <motion.div
							className='absolute -left-16 -top-8 w-12 h-12'
							initial={{ opacity: 0, scale: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}>
							<img
								src='/images/decorative.jpg'
								alt='Decorative element'
								className='w-full h-full object-cover rounded-full'
							/>
						</motion.div> */}
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5 }}>
						<Link to='/projects'>
							<Button variant='outline'>View All Projects</Button>
						</Link>
					</motion.div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{featuredProjects.map((project) => (
						<motion.div
							key={project.id}
							className='group cursor-pointer'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: project.id * 0.2 }}
							onHoverStart={() => setHoveredId(project.id)}
							onHoverEnd={() => setHoveredId(null)}>
							<div
								className='relative overflow-hidden rounded-lg aspect-[4/3] mb-6'
								onClick={() => window.open(project.link, "_blank")}>
								<motion.div
									className='absolute inset-0 bg-black/60 z-10 opacity-0 transition-opacity'
									animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
								/>
								<motion.img
									src={project.image}
									alt={project.title}
									className='w-full h-full object-cover object-center cursor-pointer'
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
									className='absolute bottom-6 right-6 z-20'
									initial={{ opacity: 0 }}
									animate={{
										opacity: hoveredId === project.id ? 1 : 0,
										y: hoveredId === project.id ? 0 : 20,
									}}
									transition={{ duration: 0.3 }}>
									<a
										href={project.link}
										target='_blank'
										rel='noopener noreferrer'
										className='w-12 h-12 rounded-full bg-accent flex items-center justify-center'
										aria-label={`Visit ${project.title} project`}>
										<ArrowUpRight className='text-black' size={20} />
									</a>
								</motion.div>
							</div>

							<h3 className='heading-sm mb-2 group-hover:text-accent transition-colors'>
								{project.title}
							</h3>
							<p className='paragraph'>{project.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SelectedProjects;
