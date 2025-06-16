/** @format */

import { motion } from "framer-motion";
import { ArrowDownCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedText from "../ui/AnimatedText";
import Button from "../ui/Button";

const HeroSection = () => {
	const downloadCV = () => {
		// Create a link element
		const link = document.createElement("a");
		// Set the href to the CV file in the public folder
		link.href = "./GoldenCV.pdf";
		// Set the download attribute to force download
		link.download = "GoldenCV.pdf";
		// Append to body
		document.body.appendChild(link);
		// Trigger click
		link.click();
		// Clean up
		document.body.removeChild(link);
	};

	return (
		<section className='relative min-h-screen flex flex-col justify-center pt-16 pb-8 overflow-hidden'>
			{/* Background blurs - positioned with better responsiveness */}
			<div className='absolute top-1/4 right-[10%] sm:right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-accent-blue/30 rounded-full filter blur-[80px] sm:blur-[100px] z-0' />
			<div className='absolute bottom-1/4 left-[10%] sm:left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-accent/20 rounded-full filter blur-[80px] sm:blur-[100px] z-0' />

			{/* 90% width container with max-width constraints */}
			<div className='w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 z-10 items-center '>
				{/* Text content - stacked on mobile, side-by-side on desktop */}
				<motion.div
					className='flex flex-col items-center text-center lg:items-start lg:text-left justify-center order-2 lg:order-1 mt-8 lg:mt-0'
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<div className='mb-4 sm:mb-6 w-full'>
						<AnimatedText
							text='I am Full-Stack Developer,'
							className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2'
							once
						/>
						<AnimatedText
							text='and Entrepreneur.'
							className='text-3xl sm:text-4xl lg:text-5xl font-bold'
							once
						/>
					</div>

					<motion.p
						className='text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.0 }}>
						Hi, I'm Mahmoud Nayel, a passionate Full-Stack Developer and freelance web
						creator with hands-on experience in building dynamic and
						user-friendly applications.
					</motion.p>

					<motion.div
						className='flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.2 }}>
						<Button
							icon={<Download size={16} className='mr-1' />}
							onClick={downloadCV}>
							Download CV
						</Button>
						<Link to='/projects'>
							<Button variant='outline'>View Projects</Button>
						</Link>
					</motion.div>
				</motion.div>

				{/* Profile photo with stats - optimized sizing for different screens */}
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
						className='profile-photo relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10'
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.5 }}>
						<div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-blue/10 z-0' />
						<img
							src='https://i.postimg.cc/0jF8gXh6/MainME.jpg'
							alt='GBOY'
							className='w-full h-full object-cover object-center'
						/>
					</motion.div>

					{/* Stat boxes - hidden on smaller screens, shown on lg+ */}
					<motion.div
						className='absolute bottom-4 right-0 lg:bottom-10 lg:right-16 translate-y-8 sm:translate-y-16 bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10 hidden sm:block'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						whileHover={{ y: -5 }}>
						<p className='text-accent font-semibold text-lg'>15+</p>
						<p className='text-white/70 text-xs sm:text-sm'>
							Successful Projects
						</p>
					</motion.div>

					<motion.div
						className='absolute top-8 left-0 lg:top-20 lg:left-10 bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10 hidden sm:block'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1.2 }}
						whileHover={{ y: -5 }}>
						<p className='text-accent font-semibold text-lg'>100+</p>
						<p className='text-white/70 text-xs sm:text-sm'>Training Hours</p>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll indicator - hidden on mobile, shown on md+ */}
			<motion.div
				className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex items-center'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 1.4 }}>
				<ArrowDownCircle
					className='animate-bounce mr-2 text-accent'
					size={20}
				/>
				<span className='text-white/70 text-sm'>Scroll down to explore</span>
			</motion.div>
		</section>
	);
};

export default HeroSection;
