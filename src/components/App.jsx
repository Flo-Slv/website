import React, { useEffect, useState } from 'react';

import Menu from './Menu.jsx';
import RightSidebar from './RightSidebar.jsx';
import LeftSidebar from './LeftSidebar.jsx';
import Intro from './Intro.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import ModalCV from './ModalCV.jsx';

import '../css/app.css';
import '../css/loader.css';

const App = () => {
	const [show, setShow] = useState(Boolean(false));

	const toggleModal = () => setShow(!show);

	useEffect(() => {
		setTimeout(() => {
			const animated = document.getElementById('animated');
			const loader = document.getElementById('loader');

			animated.style.opacity = 1;
			animated.style.height = '100vh';
			animated.style.paddingTop = '100px';
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
					<Menu toggleModal={toggleModal} />
				</header>

				<div className={'content'}>
					{show && <ModalCV toggleModal={toggleModal} />}

					<LeftSidebar />

					<main>
						<Intro />
						<About />
						<Experience />
						<Projects />
						<Contact />
						<Footer />
					</main>

					<RightSidebar />
				</div>
			</div>
		</div>
	);
};

export default App;
