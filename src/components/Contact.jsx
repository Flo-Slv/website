import React from 'react';

import TitleSection from './utils/TitleSection.jsx';

import '../css/contact.css';

const Contact = () => {
	return (
		<section id='contact'>
			<TitleSection
				number={'04.'}
				title={'Me contacter'}
				name={'contact'}
			/>

			<div className={'contact'}>
				<h2>Restons en contact !</h2>
				<p>
					Vous pouvez me contacter sur <a href='https://www.linkedin.com/in/flo-slv' target='_blank' rel='noopener noreferrer' aria-label='Linkedin'>Linkedin</a> ou par <a href='mailto:florent.sanlaville@protonmail.ch' rel='noopener noreferrer' aria-label='Email'>e-mail</a>.
				</p>
			</div>
		</section>
	);
};

export default Contact;
