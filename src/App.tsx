import { ScrollTrigger, SplitText } from 'gsap/all';
import { gsap } from 'gsap';

import {
	About,
	Art,
	Cocktails,
	Contact,
	Hero,
	Menu,
	Navbar,
} from './components/ui';
import { AOSInit } from './components/animations';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<main>
			<AOSInit />

			<Navbar />
			<Hero />
			<Cocktails />
			<About />
			<Art />
			<Menu />
			<Contact />
		</main>
	);
};

export default App;
