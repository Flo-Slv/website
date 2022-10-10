import React from 'react';

import TitleSection from './utils/TitleSection.js';

import '../css/projects.css';

const Projects = () => {
	return (
		<section id='projects'>
			<TitleSection
				number={'03.'}
				title={'Projets perso'}
				name={'projects'}
			/>

			<div className={'left-project'}>
				<img
					src='./images/link-in-bio.png'
					alt='Link-in-bio'
				/>

				<div className={'left-content'}>
					<h3>Link-in-bio</h3>
					<div className={'left-text'}>
						Une page web pour afficher mes reseaux sociaux.
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
