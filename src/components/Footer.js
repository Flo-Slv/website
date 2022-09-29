import React from 'react';

import '../css/footer.css';

const Footer = () => {
	return (
		<footer>
			<div className={'footer-desktop'}>
				J'ai créé ce site avec du HTML, CSS et JavaScript.
				<a
					href='https://github.com/Flo-Slv/website'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Github'
				>
					Code source
				</a>
			</div>

			<ul className={'footer-smartphone'}>
				<li>Test</li>
				<li>Test</li>
				<li>Test</li>
			</ul>
		</footer>
	);
};

export default Footer;
