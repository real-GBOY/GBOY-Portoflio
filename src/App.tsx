/** @format */

import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Loading from "./components/ui/Loading";

function App() {
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(true);
	const [isNavigating, setIsNavigating] = useState(false);

	useEffect(() => {
		// Initial load
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		// Navigation between pages
		setIsNavigating(true);
		const timer = setTimeout(() => {
			setIsNavigating(false);
		}, 500);

		return () => clearTimeout(timer);
	}, [location.pathname]);

	return (
		<HelmetProvider>
			<Layout>
				{isLoading && <Loading />}
				<AnimatePresence mode='wait'>
					{isNavigating && <Loading />}
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</AnimatePresence>
			</Layout>
		</HelmetProvider>
	);
}

export default App;
