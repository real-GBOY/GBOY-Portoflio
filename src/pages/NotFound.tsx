/** @format */

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import AnimatedText from "../components/ui/AnimatedText";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className='min-h-screen pt-32 pb-24 bg-black flex items-center justify-center'>
			<Helmet>
				<title>404 - Page Not Found | GBOY</title>
				<meta
					name='description'
					content='Page not found - The requested page could not be found'
				/>
			</Helmet>

			<div className='container mx-auto px-6 text-center'>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2 }}>
					<AnimatedText
						text='404'
						className='text-[120px] md:text-[180px] font-bold text-accent mb-4'
						once
					/>
					<h1 className='heading-lg mb-6'>Page Not Found</h1>
					<p className='paragraph max-w-md mx-auto mb-8'>
						Oops! The page you're looking for seems to have vanished into the
						digital void. Let's get you back on track.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button onClick={() => navigate(-1)}>Go Back</Button>
						<Button onClick={() => navigate("/")}>Return Home</Button>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default NotFound;
