/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
	Mail,
	MapPin,
	Phone,
	Send,
	Github,
	Linkedin,
	Twitter,
} from "lucide-react";
import AnimatedText from "../components/ui/AnimatedText";
import Button from "../components/ui/Button";

const Contact = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

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
		alert("Message sent! (This is a demo)");
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className='min-h-screen pt-24 pb-16'>
			<Helmet>
				<title>Contact | Stefeny</title>
				<meta
					name='description'
					content='Contact Stefeny for design collaborations and projects'
				/>
			</Helmet>

			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-12'>
					<AnimatedText text='Contact' className='heading-lg mb-4' once />
					<p className='text-white/60 max-w-xl mx-auto'>
						Let's create something amazing together
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className='space-y-8'>
						<div className='space-y-6'>
							<div className='flex items-center space-x-4 p-4 rounded-lg bg-bg-card/50 border border-white/5'>
								<Mail className='text-accent' size={20} />
								<div>
									<p className='text-white/60 text-sm'>Email</p>
									<p className='text-white'>hello@example.com</p>
								</div>
							</div>

							<div className='flex items-center space-x-4 p-4 rounded-lg bg-bg-card/50 border border-white/5'>
								<MapPin className='text-accent' size={20} />
								<div>
									<p className='text-white/60 text-sm'>Location</p>
									<p className='text-white'>Remote, Worldwide</p>
								</div>
							</div>

							<div className='flex items-center space-x-4 p-4 rounded-lg bg-bg-card/50 border border-white/5'>
								<Phone className='text-accent' size={20} />
								<div>
									<p className='text-white/60 text-sm'>Phone</p>
									<p className='text-white'>+1 (555) 123-4567</p>
								</div>
							</div>
						</div>

						<div className='pt-8'>
							<div className='flex space-x-4'>
								<motion.a
									href='https://github.com'
									target='_blank'
									rel='noopener noreferrer'
									className='p-3 rounded-lg bg-bg-card/50 border border-white/5 text-white/60 hover:text-white transition-colors'
									whileHover={{ y: -2 }}>
									<Github size={20} />
								</motion.a>
								<motion.a
									href='https://linkedin.com'
									target='_blank'
									rel='noopener noreferrer'
									className='p-3 rounded-lg bg-bg-card/50 border border-white/5 text-white/60 hover:text-white transition-colors'
									whileHover={{ y: -2 }}>
									<Linkedin size={20} />
								</motion.a>
								<motion.a
									href='https://twitter.com'
									target='_blank'
									rel='noopener noreferrer'
									className='p-3 rounded-lg bg-bg-card/50 border border-white/5 text-white/60 hover:text-white transition-colors'
									whileHover={{ y: -2 }}>
									<Twitter size={20} />
								</motion.a>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<input
									type='text'
									name='name'
									value={formState.name}
									onChange={handleChange}
									placeholder='Your Name'
									className='w-full px-4 py-3 bg-bg-card/50 border border-white/5 rounded-lg focus:outline-none focus:border-accent text-white placeholder-white/40'
									required
								/>
							</div>

							<div>
								<input
									type='email'
									name='email'
									value={formState.email}
									onChange={handleChange}
									placeholder='Your Email'
									className='w-full px-4 py-3 bg-bg-card/50 border border-white/5 rounded-lg focus:outline-none focus:border-accent text-white placeholder-white/40'
									required
								/>
							</div>

							<div>
								<input
									type='text'
									name='subject'
									value={formState.subject}
									onChange={handleChange}
									placeholder='Subject'
									className='w-full px-4 py-3 bg-bg-card/50 border border-white/5 rounded-lg focus:outline-none focus:border-accent text-white placeholder-white/40'
									required
								/>
							</div>

							<div>
								<textarea
									name='message'
									value={formState.message}
									onChange={handleChange}
									placeholder='Your Message'
									rows={4}
									className='w-full px-4 py-3 bg-bg-card/50 border border-white/5 rounded-lg focus:outline-none focus:border-accent text-white placeholder-white/40'
									required
								/>
							</div>

							<Button
								type='submit'
								icon={<Send size={18} />}
								className='w-full py-3'>
								Send Message
							</Button>
						</form>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
