import React from 'react';

import '../css/menu.css';

const Menu = () => {
	return (
		<nav className={'menu'}>
			<label id='menu-hamburger'>
				<input type='checkbox' />
				<span className={'menu-hamburger'}>
					<span className={'hamburger'}></span>
				</span>

				<ul>
					<li><a href='#about'>A propos</a></li>
					<li><a href='#experience'>Expériences</a></li>
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
					<a href='#about'><span>01.</span> A propos</a>
				</li>

				<li>
					<a href='#experience'><span>02.</span> Expérience</a>
				</li>

				<li>
					<a href='#projects'><span>03.</span> Projets</a>
				</li>

				<li>
					<a href='#contact'><span>04.</span> Me contacter</a>
				</li>

				<li id='resume'>
					<a href='#resume'>CV</a>
				</li>
			</ul>
		</nav>
	)
};

export default Menu;
