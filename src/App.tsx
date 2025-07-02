import { ScrollTrigger, SplitText } from 'gsap/all';
import { gsap } from 'gsap';

import { About, Art, Cocktails, Hero, Navbar } from './components';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<Cocktails />
			<About />
			<Art />
		</main>
	);
};

export default App;
