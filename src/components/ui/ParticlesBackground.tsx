/** @format */

import { useCallback, useEffect, useRef } from "react";

const ParticlesBackground = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const drawParticles = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Set canvas dimensions
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// Particle properties
		const particlesArray: Particle[] = [];
		const numberOfParticles = Math.min(
			100,
			Math.floor((window.innerWidth * window.innerHeight) / 9000)
		);

		// Particle class
		class Particle {
			x: number;
			y: number;
			size: number;
			speedX: number;
			speedY: number;
			color: string;

			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.size = Math.random() * 3 + 1;
				this.speedX = Math.random() * 1 - 0.5;
				this.speedY = Math.random() * 1 - 0.5;
				this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
					Math.random() * 255
				})`;
			}

			update() {
				this.x += this.speedX;
				this.y += this.speedY;

				if (this.x > canvas.width) this.x = 0;
				else if (this.x < 0) this.x = canvas.width;

				if (this.y > canvas.height) this.y = 0;
				else if (this.y < 0) this.y = canvas.height;
			}

			draw() {
				ctx.fillStyle = this.color;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		// Create particles
		const init = () => {
			for (let i = 0; i < numberOfParticles; i++) {
				particlesArray.push(new Particle());
			}
		};

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < particlesArray.length; i++) {
				particlesArray[i].update();
				particlesArray[i].draw();

				// Connect particles
				for (let j = i; j < particlesArray.length; j++) {
					const dx = particlesArray[i].x - particlesArray[j].x;
					const dy = particlesArray[i].y - particlesArray[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 100) {
						ctx.beginPath();
						ctx.strokeStyle = `rgba(204, 255, 0, ${0.1 - distance / 1000})`;
						ctx.lineWidth = 0.2;
						ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
						ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
						ctx.stroke();
					}
				}
			}

			requestAnimationFrame(animate);
		};

		init();
		animate();

		// Handle resize
		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			particlesArray.length = 0;
			init();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		drawParticles();
	}, [drawParticles]);

	return <canvas ref={canvasRef} className='fixed inset-0 z-[-1] opacity-60' />;
};

export default ParticlesBackground;
