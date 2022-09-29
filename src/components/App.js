import React, { useEffect } from 'react';

import Menu from './Menu.js';
import RightSidebar from './Sidebar.js';

import '../css/app.css';
import '../css/loader.css';

const App = () => {
	useEffect(() => {
		setTimeout(() => {
			const animated = document.getElementById('animated');

			animated.style.opacity = 1;
		}, 6000);
	});

	return (
		<div className={'app'}>
			<div id='loader'>
				<div>V</div>
				<div>L</div>
				<div>S</div>
				<div>-</div>
				<div>O</div>
				<div>L</div>
				<div>F</div>
			</div>

			<div id='animated'>
				<header>
					<Menu />
				</header>

				<div className={'content'}>
					<RightSidebar />

					<main>
						Under construction !
					</main>
				</div>
			</div>
		</div>
	);
};

export default App;
