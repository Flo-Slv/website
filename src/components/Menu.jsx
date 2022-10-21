import React from 'react';

import '../css/menu.css';

const Menu = ({ toggleModal }) => {
	return (
		<nav className={'menu'}>
			<label id='menu-hamburger'>
				<input type='checkbox' />
				<span className={'menu-hamburger'}>
					<span className={'hamburger'}></span>
				</span>

				<ul>
					<li><a href='#about'>À propos</a></li>
					<li><a href='#experiences'>Expériences</a></li>
					<li><a href='#projects'>Projets</a></li>
					<li><a href='#contact'>Me contacter</a></li>
					<li><a href='#resume'>CV</a></li>
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
