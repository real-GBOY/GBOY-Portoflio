/** @format */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../ui/AnimatedText";
import Button from "../ui/Button";

const ContactCTA = () => {
	const navigate = useNavigate();

	const handleContactClick = () => {
		navigate("/contact");
	};

	return (
		<section
			className='py-24 bg-gradient-to-b from-black via-bg-dark to-black relative overflow-hidden'
			aria-label='Contact call to action'>
			{/* Background elements */}
			<div className='absolute top-1/4 right-1/4 w-72 h-72 bg-accent-blue/20 rounded-full filter blur-[100px] z-0' />
			<div className='absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-[100px] z-0' />

			<div className='container mx-auto px-6 relative z-10'>
				<motion.div
					className='text-center max-w-3xl mx-auto'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}>
					<h2 className='sr-only'>Ready to Start Your Project?</h2>
					<AnimatedText
						text='Ready to Start Your Project?'
						className='heading-lg mb-6'
						once
					/>
					<motion.p
						className='paragraph mb-10 max-w-2xl mx-auto'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						Let's collaborate to bring your ideas to life. Whether you need a
						new website, application, or digital solution, I'm here to help you
						achieve your goals.
					</motion.p>

					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.3 }}
						className='inline-block'>
						<Button
							icon={<ArrowRight size={18} />}
							className='px-8 py-4 text-lg'
							onClick={handleContactClick}
							aria-label='Get in touch and start your project'>
							Get In Touch
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactCTA;
