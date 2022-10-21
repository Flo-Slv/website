import React from 'react';

import '../css/footer.css';

const Footer = () => {
	return (
		<footer>
			<div className={'footer-desktop'}>
				Site fait avec <span>amour</span> !
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
