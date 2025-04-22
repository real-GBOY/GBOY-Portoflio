/** @format */

import { motion, Variants } from "framer-motion";

const Loading = () => {
	const letters = ["G", "B", "O", "Y"];

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	};

	const letterVariants: Variants = {
		hidden: {
			y: 20,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				damping: 20,
				stiffness: 300,
			},
		},
	};

	const dotVariants: Variants = {
		hidden: { scale: 0 },
		visible: {
			scale: 1,
			transition: {
				type: "spring",
				damping: 15,
				stiffness: 200,
			},
		},
	};

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-bg-dark z-50'>
			<motion.div
				className='relative flex flex-col items-center'
				initial='hidden'
				animate='visible'
				exit='exit'
				variants={containerVariants}>
				<motion.div className='flex space-x-8 mb-4'>
					{letters.map((letter, i) => (
						<motion.div key={i} className='relative' variants={letterVariants}>
							<motion.span className='text-4xl font-light tracking-wider text-accent'>
								{letter}
							</motion.span>
						</motion.div>
					))}
				</motion.div>

				<motion.div className='flex space-x-2'>
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							className='w-1.5 h-1.5 rounded-full bg-accent/50'
							variants={dotVariants}
							animate={{
								opacity: [0.5, 1, 0.5],
								scale: [1, 1.2, 1],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								delay: i * 0.2,
								repeatType: "reverse" as const,
							}}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Loading;
