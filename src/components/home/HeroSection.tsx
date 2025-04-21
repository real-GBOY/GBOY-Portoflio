/** @format */

import { motion } from "framer-motion";
import { ArrowDownCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedText from "../ui/AnimatedText";
import Button from "../ui/Button";
import { jsPDF } from "jspdf";

const HeroSection = () => {
	const downloadCV = () => {
		// Create a link element
		const link = document.createElement("a");
		// Set the href to the CV file in the public folder
		link.href = "/CV.pdf";
		// Set the download attribute to force download
		link.download = "GBOY_CV.pdf";
		// Append to body
		document.body.appendChild(link);
		// Trigger click
		link.click();
		// Clean up
		document.body.removeChild(link);
	};

	return (
		<section className='min-h-screen relative flex items-center pt-20'>
			<div className='absolute top-1/4 right-1/4 w-72 h-72 bg-accent-blue/30 rounded-full filter blur-[100px] z-0' />
			<div className='absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-[100px] z-0' />

			<div className='container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 items-start'>
				<motion.div
					className='flex flex-col justify-center order-2 lg:order-1'
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<div className='mb-6'>
						<AnimatedText
							text='I am Full-Stack Developer,'
							className='heading-xl mb-2'
							once
						/>
						<AnimatedText
							text='and Entrepreneur.'
							className='heading-xl'
							once
						/>
					</div>

					<motion.p
						className='paragraph mb-8 max-w-lg'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.0 }}>
						Hi, I'm GBOY, a passionate Full-Stack Developer and freelance web
						creator with hands-on experience in building dynamic and
						user-friendly applications.
					</motion.p>

					<motion.div
						className='flex flex-wrap gap-4'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.2 }}>
						<Button icon={<Download size={18} />} onClick={downloadCV}>
							Download CV
						</Button>
						<Link to='/projects'>
							<Button variant='outline'>View Projects</Button>
						</Link>
					</motion.div>
				</motion.div>

				<motion.div
					className='relative flex justify-center items-center order-1 lg:order-2'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.4,
						type: "spring",
						stiffness: 100,
					}}>
					<motion.div
						className='profile-photo relative w-96 h-96 rounded-full overflow-hidden border-4 border-white/10'
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.5 }}>
						<div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-blue/10 z-0' />
						<img
							src='https://i.postimg.cc/SKm76T1T/Whats-App-Image-2025-04-19-at-15-51-05-85c4db21.jpg'
							alt='GBOY'
							className='w-full h-full object-cover object-center'
						/>
					</motion.div>

					<motion.div
						className='absolute bottom-10 right-16 translate-y-16 bg-transparent p-4 rounded-lg border border-white/10 hidden lg:block'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						whileHover={{ y: -5 }}>
						<p className='text-accent font-semibold'>15+</p>
						<p className='text-white/70 text-sm'>Successful Projects</p>
					</motion.div>

					<motion.div
						className='absolute top-20 left-10 bg-transparent p-4 rounded-lg border border-white/10 hidden lg:block'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1.2 }}
						whileHover={{ y: -5 }}>
						<p className='text-accent font-semibold'>100+</p>
						<p className='text-white/70 text-sm'>Training Hours</p>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 1.4 }}>
				<ArrowDownCircle
					className='animate-bounce mr-2 text-accent'
					size={20}
				/>
				<span className='text-white/70'>Scroll down to explore</span>
			</motion.div>
		</section>
	);
};

export default HeroSection;
