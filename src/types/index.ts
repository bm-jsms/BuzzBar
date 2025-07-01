interface NavLink {
	id: string;
	title: string;
}

interface Cocktail {
	name: string;
	country: string;
	detail: string;
	price: string;
}

interface MockTail {
	name: string;
	country: string;
	detail: string;
	price: string;
}

interface Profile {
	imgPath: string;
}

type StoreInfoType = {
	heading: string;
	address: string;
	contact: {
		phone: string;
		email: string;
	};
};

interface OpeningHours {
	day: string;
	time: string;
}
interface Social {
	name: string;
	icon: string;
	url: string;
}

interface Slider {
	id: number;
	name: string;
	image: string;
	title: string;
	description: string;
}

export {
	type NavLink,
	type Cocktail,
	type MockTail,
	type Profile,
	type StoreInfoType,
	type OpeningHours,
	type Social,
	type Slider,
};
