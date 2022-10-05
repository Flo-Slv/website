import React from 'react';

import '../css/footer.css';

const Footer = () => {
	return (
		<footer>
			<div className={'footer-desktop'}>
				<div>
					J'ai créé ce site avec du HTML, CSS et JavaScript (React.js). Je n'ai utilisé aucune librairie externe pour créer mes composants React ou le CSS.
				</div>
				<div>Vous pouvez retrouver le <a href='https://github.com/Flo-Slv/website' target='_blank' rel='noopener noreferrer' aria-label='Github'>code source</a> sur GitHub.
				</div>
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
