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
		title: "Konuz Platform",
		category: "Frontend",
		tags: ["React", "Tailwind", "Framer Motion", "TypeScript"],
		image:
			"https://i.postimg.cc/fRDTQz2f/assets-task-01jxdsztmbf1dbnyxejx3g72vf-1749588982-img-0.webp",
		description:
			"Konuz is a platform for authentic Egyptian handicrafts, connecting local artisans with buyers",
		link: "https://knouz.vercel.app/",
		github: "https://github.com/real-GBOY/KNOUZ.git",
	},
	{
		id: 2,
		title: "Weavolution",
		category: "Frontend",
		tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
		image:
			"https://i.postimg.cc/XJC0ym1v/assets-task-01jxdtkx0aeryt8pxmxsq8swg5-1749589641-img-2.webp",
		description:
			"A Weavolution is a sustainable platform that upcycles textile waste into valuable products like MDF boards, yarn, and furniture.",
		link: "https://wevo-project-mu.vercel.app/",
		github: "https://github.com/real-GBOY/WevoProject.git",
	},
	
	{
		id: 3,
		title: "ShopNest",
		category: "Full Stack",
		tags: [
			"React",
			"APIs",
			"Charts",
			"Tailwind",
			"Framer Motion",
			"NodeJS",
			"Express",
		],
		image:
			"https://i.postimg.cc/bJzQGfwx/20250611-0031-Shop-Nest-Eco-Shopping-Elegance-simple-compose-01jxdw0hs0eqzay4tb01cvxnd4.png ",
		description:
			"Weather forecasting dashboard with interactive charts and location-based weather data visualization.",
		link: "https://nest-shop.vercel.app/",
		github: "https://github.com/real-GBOY/fresh-cart.git",
	},
];

export const categories = ["All", "Frontend", "Backend", "Full Stack"] as const;
