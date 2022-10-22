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

					<div className={'scroll'}>
						<a href='#intro'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path
									d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z'
								/>
							</svg>
						</a>
					</div>

					<RightSidebar />
				</div>
			</div>
		</div>
	);
};

export default App;
