/** @format */

export interface Project {
	id: number;
	title: string;
	category: "Frontend" | "Backend" | "Full Stack";
	tags: string[];
	image: string;
	description: string;
	link: string;
	github: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: "E-Commerce Platform",
		category: "Full Stack",
		tags: ["React", "Node.js", "PostgreSQL"],
		image:
			"https://i.postimg.cc/NG3tcVmM/com-wallpaper.jpg",
		description:
			"A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
		link: "https://ecommerce-demo.com",
		github: "https://github.com/username/ecommerce",
	},
	{
		id: 2,
		title: "Task Management App",
		category: "Frontend",
		tags: ["React", "TypeScript", "Tailwind"],
		image:
			"https://i.postimg.cc/NG3tcVmM/com-wallpaper.jpg",
		description:
			"A responsive task management application with drag-and-drop functionality and real-time updates.",
		link: "https://tasks-demo.com",
		github: "https://github.com/username/task-manager",
	},
	{
		id: 3,
		title: "Weather Dashboard",
		category: "Frontend",
		tags: ["React", "APIs", "Charts"],
		image:
			"https://i.postimg.cc/NG3tcVmM/com-wallpaper.jpg",
		description:
			"Weather forecasting dashboard with interactive charts and location-based weather data visualization.",
		link: "https://weather-demo.com",
		github: "https://github.com/username/weather-app",
	},
	{
		id: 4,
		title: "Blog API",
		category: "Backend",
		tags: ["Node.js", "Express", "MongoDB"],
		image:
			"https://i.postimg.cc/NG3tcVmM/com-wallpaper.jpg",
		description:
			"RESTful API for a blog platform with authentication, comment system, and content management.",
		link: "https://blog-api-docs.com",
		github: "https://github.com/username/blog-api",
	},
	{
		id: 5,
		title: "Chat Application",
		category: "Full Stack",
		tags: ["React", "Socket.io", "Express"],
		image:
			"https://i.postimg.cc/NG3tcVmM/com-wallpaper.jpg",
		description:
			"Real-time chat application with private messaging, group chats, and file sharing capabilities.",
		link: "https://chat-demo.com",
		github: "https://github.com/username/chat-app",
	},
	{
		id: 6,
		title: "Portfolio Generator",
		category: "Frontend",
		tags: ["React", "Next.js", "MDX"],
		image:
			"https://i.postimg.cc/NG3tcVmM/com-wallpaper.jpg",
		description:
			"Developer portfolio generator with customizable themes and markdown content support.",
		link: "https://portfolio-gen.com",
		github: "https://github.com/username/portfolio-gen",
	},
];

export const categories = ["All", "Frontend", "Backend", "Full Stack"] as const;
