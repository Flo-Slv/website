import React, { useEffect } from 'react';

import Menu from './Menu.js';
import Sidebar from './Sidebar.js';

import '../css/app.css';

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

				<Sidebar />

				<main>
					Under construction !
				</main>
			</div>
		</div>
	);
};

export default App;
