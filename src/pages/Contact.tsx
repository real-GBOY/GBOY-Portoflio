/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
	Mail,
	MapPin,
	Phone,
	Send,
	Github,
	Linkedin,
	CheckCircle,
	Instagram,
} from "lucide-react";

const Contact = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [messageSent, setMessageSent] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formState);
		setMessageSent(true);

		// Reset form
		setFormState({
			name: "",
			email: "",
			message: "",
		});

		// Reset message sent status after 3 seconds
		setTimeout(() => {
			setMessageSent(false);
		}, 3000);
	};

	const contactItems = [
		{
			icon: <Mail className='w-5 h-5' />,
			title: "Email",
			value: "mahmmoudnayel2004@gmail.com",
		},
		{
			icon: <MapPin className='w-5 h-5' />,
			title: "Location",
			value: "Cairo, Egypt",
		},
		{
			icon: <Phone className='w-5 h-5' />,
			title: "Phone",
			value: "+20 1026597474",
		},
	];

	const formFields = [
		{ name: "name", label: "Your Name", type: "text" },
		{ name: "email", label: "Your Email", type: "email" },
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className='min-h-screen pt-16 pb-16 px-4 sm:px-6'>
			<Helmet>
				<title>Contact | Portfolio</title>
				<meta
					name='description'
					content='Contact me for development collaborations and projects'
				/>
			</Helmet>

			<div className='container mx-auto max-w-6xl overflow-hidden'>
				<div className='text-center mb-12'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-500 mt-16 '>
						Get in Touch
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-gray-300 max-w-xl mx-auto text-lg'>
						Let's create something amazing together
					</motion.p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-5 gap-10 relative'>
					{/* Decorative elements */}
					<div className='absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow' />
					<div className='absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow' />

					{/* Left column - Contact Info */}
					<div className='lg:col-span-2 relative z-10'>
						<div className='space-y-4'>
							<h2 className='text-2xl font-semibold mb-6 text-white'>
								Contact Information
							</h2>

							{contactItems.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									className='flex items-start space-x-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300'
									whileHover={{
										y: -5,
										boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
									}}>
									<div className='bg-gradient-to-br from-blue-500 to-blue-500 p-3 rounded-lg text-white'>
										{item.icon}
									</div>
									<div>
										<p className='text-gray-400 text-sm'>{item.title}</p>
										<p className='text-white font-medium'>{item.value}</p>
									</div>
								</motion.div>
							))}
						</div>

						<div className='mt-12'>
							<h3 className='text-xl font-medium mb-6 text-white/90'>
								Connect With Me
							</h3>
							<div className='flex space-x-4'>
								{[
									{
										icon: <Github size={20} />,
										href: "https://github.com/real-GBOY?tab=repositories",
										label: "GitHub",
									},
									{
										icon: <Linkedin size={20} />,
										href: "www.linkedin.com/in/mahmoud-mohamed-nayel-363b47222",
										label: "LinkedIn",
									},
									{
										icon: <Instagram size={20} />,
										href: "https://www.instagram.com/__ma7moudnayel__/",
										label: "Instagram",
									},
								].map((social, index) => (
									<motion.a
										key={index}
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										className='group flex flex-col items-center justify-center'
										whileHover={{ y: -5 }}
										transition={{
											type: "spring",
											stiffness: 300,
											damping: 10,
										}}>
										<motion.div
											className='p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-white transition-colors duration-300 mb-2'
											whileHover={{
												backgroundColor: "rgba(255, 255, 255, 0.1)",
												borderColor: "rgba(255, 255, 255, 0.2)",
											}}>
											{social.icon}
										</motion.div>
										<span className='text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300'>
											{social.label}
										</span>
									</motion.a>
								))}
							</div>
						</div>
					</div>

					{/* Right column - Contact Form */}
					<div className='lg:col-span-3 relative z-10'>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6 }}
							className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg'>
							{messageSent ? (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className='flex flex-col items-center justify-center py-12'>
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{
											type: "spring",
											stiffness: 260,
											damping: 20,
										}}>
										<CheckCircle className='text-green-500 w-16 h-16 mb-4' />
									</motion.div>
									<h3 className='text-2xl font-medium text-white mb-2'>
										Message Sent!
									</h3>
									<p className='text-gray-400 text-center'>
										Thank you for reaching out. I'll get back to you shortly.
									</p>
								</motion.div>
							) : (
								<>
									<h2 className='text-2xl font-semibold mb-6 text-white'>
										Send a Message
									</h2>
									<form onSubmit={handleSubmit} className='space-y-5'>
										{formFields.map((field) => (
											<div key={field.name} className='space-y-1'>
												<label
													htmlFor={field.name}
													className='block text-sm font-medium text-gray-300 mb-1'>
													{field.label}
												</label>
												<motion.input
													type={field.type}
													id={field.name}
													name={field.name}
													value={
														formState[field.name as keyof typeof formState]
													}
													onChange={handleChange}
													className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20'
													required
												/>
											</div>
										))}

										<div className='space-y-1'>
											<label
												htmlFor='message'
												className='block text-sm font-medium text-gray-300 mb-1'>
												Your Message
											</label>
											<motion.textarea
												id='message'
												name='message'
												value={formState.message}
												onChange={handleChange}
												rows={5}
												className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-purple-500/20 resize-none'
												required
											/>
										</div>

										<motion.button
											type='submit'
											className='w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-500 text-white font-medium rounded-lg flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-blue-600 transition-all duration-200'
											whileHover={{ scale: 1.01 }}
											whileTap={{ scale: 0.98 }}>
											<Send size={18} />
											<span>Send Message</span>
										</motion.button>
									</form>
								</>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
