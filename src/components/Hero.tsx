/** @format */

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import VantaEffect from "./VantaEffect";

const Hero = () => {
	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Vanta Effect Background */}
			<VantaEffect />

			{/* Content */}
			<div className='relative z-10 text-center px-4 sm:px-6'>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-500'>
					Mahmoud Nayel
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='text-xl sm:text-2xl text-gray-300 mb-8'>
					Full Stack Developer
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='flex flex-col sm:flex-row items-center justify-center gap-4'>
					<a
						href='#contact'
						className='px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2'>
						Contact Me
					</a>
					<button
						onClick={() => {
							const link = document.createElement("a");
							link.href = "/GoldenCV.pdf";
							link.download = "GoldenCV.pdf";
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}}
						className='px-8 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 flex items-center gap-2'>
						<Download size={20} />
						Download CV
					</button>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
				<ArrowDown className='w-6 h-6 text-blue-500 animate-bounce' />
			</motion.div>
		</section>
	);
};

export default Hero;
