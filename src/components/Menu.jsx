import React, { useState } from 'react';

import '../css/menu.css';

const Menu = ({ toggleModal }) => {
	const [toggleHamburger, setToggle] = useState(Boolean(false));

	const closeHamburger = () => {
		const input = document.getElementById('hamburger-input');
		input.checked = Boolean(false);
		setToggle(Boolean(false));
	};

	return (
		<nav className={'menu'}>
			<label id='menu-hamburger'>
				<input type='checkbox' id='hamburger-input' />
				<span
					className={'menu-hamburger'}
					onClick={() => setToggle(!toggleHamburger)}
				>
					<span className={'hamburger'}></span>
				</span>

				<ul
					className={`${toggleHamburger ? 'hamburger-open' : 'hamburger-close'}`}
				>
					<li onClick={() => closeHamburger()}>
						<a href='#about'>À propos</a>
					</li>
					<li onClick={() => closeHamburger()}>
						<a href='#experiences'>Expériences</a>
					</li>
					<li onClick={() => closeHamburger()}>
						<a href='#projects'>Projets</a>
					</li>
					<li onClick={() => closeHamburger()}>
						<a href='#contact'>Me contacter</a>
					</li>
					<li>
						<a href='#resume'>CV</a>
					</li>
				</ul>
			</label>

			<ul id='menu-desktop'>
				<li>
					<a href='#intro'>FS</a>
				</li>

				<li>
					<a href='#about'><span>01.</span> À propos</a>
				</li>

				<li>
					<a href='#experiences'><span>02.</span> Expériences</a>
				</li>

				<li>
					<a href='#projects'><span>03.</span> Projets</a>
				</li>

				<li>
					<a href='#contact'><span>04.</span> Me contacter</a>
				</li>

				<li id='resume'>
					<button onClick={() => toggleModal()}>CV</button>
				</li>
			</ul>
		</nav>
	)
};

export default Menu;
