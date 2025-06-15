/** @format */

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart, Instagram } from "lucide-react";
import Logo from "../ui/Logo";

const Footer = () => {
	const year = new Date().getFullYear();

	const footerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<motion.footer
			className='bg-bg-dark py-12 sm:py-16 border-t border-white/10'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={footerVariants}
			role='contentinfo'
			aria-label='Site footer'>
			<div className='container mx-auto px-4 sm:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12'>
					<motion.div
						variants={itemVariants}
						className='flex flex-col space-y-4 sm:space-y-6'>
						<Logo />
						<p className='text-white/70 max-w-xs text-sm sm:text-base'>
							Crafting digital experiences that blend creativity with
							functionality.
						</p>
						<nav aria-label='Social media links'>
							<div className='flex items-center space-x-4 sm:space-x-6'>
								<motion.a
									href='https://github.com/cptnSUKUNA'
									target='_blank'
									rel='noopener noreferrer'
									className='text-white/70 hover:text-white transition-colors'
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}>
									<Github size={18} className='w-4 h-4 sm:w-5 sm:h-5' />
								</motion.a>
								<motion.a
									href='www.linkedin.com/in/mahmoud-mohamed-nayel-363b47222'
									target='_blank'
									rel='noopener noreferrer'
									className='text-white/70 hover:text-white transition-colors'
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.6 }}>
									<Linkedin size={18} className='w-4 h-4 sm:w-5 sm:h-5' />
								</motion.a>
								<motion.a
									href='https://www.instagram.com/__ma7moudnayel__/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-white/70 hover:text-white transition-colors'
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.7 }}>
									<Instagram size={18} className='w-4 h-4 sm:w-5 sm:h-5' />
								</motion.a>
							</div>
						</nav>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className='flex flex-col space-y-4 sm:space-y-6'>
						<h3 className='text-lg sm:text-xl font-semibold'>Quick Links</h3>
						<nav aria-label='Quick links'>
							<ul className='space-y-2 sm:space-y-3'>
								<li>
									<a
										href='/'
										className='text-white/70 hover:text-white transition-colors text-sm sm:text-base'>
										Home
									</a>
								</li>
								<li>
									<a
										href='/about'
										className='text-white/70 hover:text-white transition-colors text-sm sm:text-base'>
										About
									</a>
								</li>
								<li>
									<a
										href='/projects'
										className='text-white/70 hover:text-white transition-colors text-sm sm:text-base'>
										Projects
									</a>
								</li>
								<li>
									<a
										href='/contact'
										className='text-white/70 hover:text-white transition-colors text-sm sm:text-base'>
										Contact
									</a>
								</li>
							</ul>
						</nav>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className='flex flex-col space-y-4 sm:space-y-6'>
						<h3 className='text-lg sm:text-xl font-semibold'>Contact</h3>
						<p className='text-white/70 text-sm sm:text-base'>
							Feel free to reach out if you want to collaborate or just say hi!
						</p>
						<a
							href='mailto:mahmmoudnayel2004@gmail.com'
							className='text-accent hover:underline text-sm sm:text-base'
							aria-label='Send me an email'>
							mahmmoudnayel2004@gmail.com
						</a>
					</motion.div>
				</div>

				<motion.div
					variants={itemVariants}
					className='mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 text-center text-white/60 flex flex-col sm:flex-row justify-center items-center text-sm sm:text-base'>
					<p>&copy; {year} GoldenBoy. All Rights Reserved.</p>
				</motion.div>
			</div>
		</motion.footer>
	);
};

export default Footer;
