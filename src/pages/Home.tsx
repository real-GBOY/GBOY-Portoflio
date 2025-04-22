/** @format */

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";
import SkillsSection from "../components/home/SkillsSection";
import SelectedProjects from "../components/home/SelectedProjects";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ContactCTA from "../components/home/ContactCTA";
import ParticlesBackground from "../components/ui/ParticlesBackground";

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}>
			<Helmet>
				<title>GBOY</title>
				<meta
					name='description'
					content='Full Stack Developer with experience in building modern web applications'
				/>
			</Helmet>

			<ParticlesBackground />
			<HeroSection />
			<SkillsSection />
			<SelectedProjects />
			<TestimonialsSection />
			<ContactCTA />
		</motion.div>
	);
};

export default Home;
