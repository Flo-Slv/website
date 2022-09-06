import React from 'react';

import Menu from './Menu.js';
import Sidebar from './Sidebar.js';

import '../css/app.css';

const App = () => {
	return (
		<div className="app">
			<header>
				<Menu />
			</header>

			<Sidebar />

			<main>
			</main>
		</div>
	);
};

export default App;
