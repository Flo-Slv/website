import React, { useEffect } from 'react';

import Menu from './Menu.js';
import RightSidebar from './RightSidebar.js';
import LeftSidebar from './LeftSidebar.js';
import Intro from './Intro.js';
import About from './About.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Footer from './Footer.js';

import '../css/app.css';
import '../css/loader.css';

const App = () => {
	useEffect(() => {
		setTimeout(() => {
			const animated = document.getElementById('animated');
			const loader = document.getElementById('loader');

			animated.style.opacity = 1;
			animated.style.height = '100vh';
			animated.style.paddingTop = '120px';
			loader.style.display = 'none';
		}, 6000);
	});

	return (
		<div className={'app'}>
			<div id='loader'>
				<div id='square'>
					<div id='top'></div>
					<div id='right'></div>
					<div id='bottom'></div>
					<div id='left'></div>
				</div>
				<div id='final-square'></div>
			</div>

			<div id='animated'>
				<header>
					<Menu />
				</header>

				<div className={'content'}>
					<LeftSidebar />

					<main>
						<Intro />
						<About />
						<Experience />
						<Projects />
						<Footer />
					</main>

					<RightSidebar />
				</div>
			</div>
		</div>
	);
};

export default App;
