import React from 'react';

import '../css/intro.css';

const Intro = () => {
	return (
		<section id='intro'>
			<h1>Salut, je m'appelle</h1>

			<div className={'name'}>Florent Sanlaville.</div>

			<div className={'things'}>Je construis des trucs sur internet.</div>

			<div className={'description'}>
				<p>
					Je suis un développeur <a href='https://tinyurl.com/5n6e7b66' target='_blank' rel='noopener noreferrer'>web</a> spécialisé en <span>JavaScript</span>.
				</p>
				<p>J'adore les nouvelles technologies et tout ce qui me permet de devenir un meilleur développeur.
				</p>
				<p>J'apprends actuellement la cybersecurité.</p>
			</div>
		</section>
	);
};

export default Intro;
