import React from 'react';
import Announcement from './Announcement';
import Navbar from './Navbar';
import Slider from './Slider';
import Categories from './Categories';

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
		</div>
	);
};

export default Home;
