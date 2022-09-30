import React, { useEffect } from 'react';

import Menu from './Menu.js';
import RightSidebar from './RightSidebar.js';
import LeftSidebar from './LeftSidebar.js';
import Intro from './Intro.js';
import About from './About.js';
import Footer from './Footer.js';

import '../css/app.css';
import '../css/loader.css';

const App = () => {
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		const animated = document.getElementById('animated');
	//
	// 		animated.style.opacity = 1;
	// 	}, 6000);
	// });

	return (
		<div className={'app'}>
			<div id='loader'>
				{/*<div>V</div>*/}
				{/*<div>L</div>*/}
				{/*<div>S</div>*/}
				{/*<div>-</div>*/}
				{/*<div>O</div>*/}
				{/*<div>L</div>*/}
				{/*<div>F</div>*/}
			</div>

			<div id='animated'>
				<header>
					<Menu />
				</header>

				<div className={'content'}>
					<RightSidebar />

					<main>
						<Intro />
						<About />
						<Footer />
					</main>

					<LeftSidebar />
				</div>
			</div>
		</div>
	);
};

export default App;
