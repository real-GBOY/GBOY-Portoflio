/** @format */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Logo from "../ui/Logo";

const navItems = [
	{ title: "Home", path: "/" },
	{ title: "About", path: "/about" },
	{ title: "Projects", path: "/projects" },
	{ title: "Contact", path: "/contact" },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setOpen(false);
	}, [location]);

	const navVariants = {
		hidden: { y: -100, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				duration: 0.5,
			},
		},
	};

	const navItemVariants = {
		hidden: { y: -20, opacity: 0 },
		visible: (i: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: i * 0.1,
				duration: 0.5,
			},
		}),
	};

	const mobileMenuVariants = {
		closed: {
			opacity: 0,
			x: "100%",
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
		open: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
	};

	return (
		<motion.header
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
				scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
			}`}
			initial='hidden'
			animate='visible'
			variants={navVariants}>
			<div className='container mx-auto px-6 flex justify-between items-center'>
				<Logo />

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center space-x-10'>
					{navItems.map((item, i) => (
						<motion.div
							key={item.title}
							custom={i}
							initial='hidden'
							animate='visible'
							variants={navItemVariants}>
							<Link
								to={item.path}
								className={`link-hover text-lg transition-colors ${
									location.pathname === item.path
										? "text-accent font-medium"
										: "text-white/80 hover:text-white"
								}`}>
								{item.title}
							</Link>
						</motion.div>
					))}
				</nav>

				{/* Social Links */}
				<div className='hidden md:flex items-center space-x-6'>
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
						<Github size={20} />
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
						<Linkedin size={20} />
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
						<Instagram size={20} />
					</motion.a>
				</div>

				{/* Mobile Menu Button */}
				<motion.button
					className='md:hidden text-white z-50'
					onClick={() => setOpen(!open)}
					whileTap={{ scale: 0.9 }}>
					{open ? <X size={24} /> : <Menu size={24} />}
				</motion.button>

				{/* Mobile Menu */}
				<motion.div
					className={`fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-40 md:hidden`}
					initial='closed'
					animate={open ? "open" : "closed"}
					variants={mobileMenuVariants}>
					<nav className='flex flex-col items-center space-y-8'>
						{navItems.map((item, i) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ delay: open ? i * 0.1 : 0 }}>
								<Link
									to={item.path}
									className={`text-2xl font-medium transition-colors ${
										location.pathname === item.path
											? "text-accent"
											: "text-white/80 hover:text-white"
									}`}>
									{item.title}
								</Link>
							</motion.div>
						))}
						<div className='flex space-x-8 mt-8'>
							<motion.a
								href='https://github.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-white/70 hover:text-white transition-colors'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}>
								<Github size={24} />
							</motion.a>
							<motion.a
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-white/70 hover:text-white transition-colors'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}>
								<Linkedin size={24} />
							</motion.a>
							<motion.a
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-white/70 hover:text-white transition-colors'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}>
								<Twitter size={24} />
							</motion.a>
						</div>
					</nav>
				</motion.div>
			</div>
		</motion.header>
	);
};

export default Navbar;
