import { ScrollTrigger, SplitText } from 'gsap/all';
import { gsap } from 'gsap';

import { Cocktails, Hero, Navbar } from './components';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<Cocktails />
		</main>
	);
};

export default App;
