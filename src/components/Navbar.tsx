import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { navLinks } from '../constants';

const Navbar = () => {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: 'nav',
				start: 'bottom top',
			},
		});

		navTween.fromTo(
			'nav',
			{
				backgroundColor: 'transparent',
			},
			{
				backgroundColor: '#00000050',
				backgroundFilter: 'blur(10px)',
				duration: 1,
				ease: 'power2.out',
			},
		);
	}, []);
	return (
		<nav>
			<div className='md:px-10'>
				<a href='#home' className='flex items-center gap-2'>
					<p>BuzzBar</p>
					<img src='/images/logo.png' alt='logo' width='50' height='50' />
				</a>
				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={link.title}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export { Navbar };
