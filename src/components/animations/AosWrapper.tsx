import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInit = () => {
	useEffect(() => {
		AOS.init({
			once: false,
			duration: 800,
			offset: 100,
		});
	}, []);

	return null;
};

export const AOSDiv = ({
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
