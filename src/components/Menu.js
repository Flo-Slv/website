import React from 'react';

import '../css/menu.css';

const Menu = () => {
	return (
		<ul className={'menu'}>
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

			<li>
				<a href='#resume'>RESUME</a>
			</li>
		</ul>
	)
};

export default Menu;
