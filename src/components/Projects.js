import React from 'react';

import TitleSection from './utils/TitleSection.js';

import '../css/projects.css';

const Projects = () => {
	return (
		<section id='projects'>
			<TitleSection
				side={'left'}
				number={'03.'}
				title={'Projets'}
				name={'projects'}
			/>
		</section>
	);
};

export default Projects;
