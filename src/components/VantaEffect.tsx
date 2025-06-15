/** @format */

import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";

const VantaEffect = () => {
	const vantaRef = useRef<HTMLDivElement>(null);
	const vantaEffect = useRef<any>(null);

	useEffect(() => {
		if (!vantaEffect.current) {
			vantaEffect.current = NET({
				el: vantaRef.current,
				THREE,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 1.0,
				scaleMobile: 1.0,
				color: 0x42d61,
				backgroundColor: 0x23153c,
				points: 13.0,
				maxDistance: 36.0,
				spacing: 14.0,
				showDots: true,
			});
		}

		return () => {
			if (vantaEffect.current) {
				vantaEffect.current.destroy();
			}
		};
	}, []);

	return <div ref={vantaRef} className='absolute inset-0 w-full h-full' />;
};

export default VantaEffect;
