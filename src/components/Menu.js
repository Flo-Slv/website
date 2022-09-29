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
					<li><a href='#about'>About</a></li>
					<li><a href='#experience'>Experience</a></li>
					<li><a href='#projects'>Projects</a></li>
					<li><a href='#contact'>Contact</a></li>
					<li><a href='#resume'>RESUME</a></li>
				</ul>
			</label>

			<ul id='menu-desktop'>
				<li>
				</li>

				<li>
					<a href='#about'><span>01.</span> About</a>
				</li>

				<li>
					<a href='#experience'><span>02.</span> Experience</a>
				</li>

				<li>
					<a href='#projects'><span>03.</span> Projects</a>
				</li>

				<li>
					<a href='#contact'><span>04.</span> Contact</a>
				</li>

				<li id='resume'>
					<a href='#resume'>RESUME</a>
				</li>
			</ul>
		</nav>
	)
};

export default Menu;
