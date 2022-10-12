import React from 'react';

import TitleSection from './utils/TitleSection.js';
import SideProject from './utils/SideProject.js';

import '../css/projects.css';

const Projects = () => {
	return (
		<section id='projects'>
			<TitleSection
				number={'03.'}
				title={'Projets perso'}
				name={'projects'}
			/>

			<SideProject
				side={'left'}
				imgSource={'link-in-bio.png'}
				title={'Link-in-bio'}
				link={'https://links.flo-slv.dev'}
				github={'link-in-bio'}
				text={'Une page web pour afficher mes réseaux sociaux, à la manière de Linktree.'}
				languages={['HTML', 'CSS', 'JavaScript', 'Vanta.js']}
			/>

			<SideProject
				side={'right'}
				imgSource={'browser.png'}
				title={'Browser homepage'}
				github={'browser-homepage'}
				text={"Une page web customisé quand j'ouvre mon navigateur"}
				languages={['HTML', 'CSS']}
			/>
		</section>
	);
};

export default Projects;
