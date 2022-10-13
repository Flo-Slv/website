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

			<SideProject
				side={'left'}
				imgSource={'flo-slv.png'}
				title={'flo-slv.dev'}
				link={'https://flo-slv.dev'}
				github={'website'}
				text={"Mon site web personnel. Créé avec Create React App pour la base. Dans le but d'afficher ma présence sur internet."}
				languages={['HTML', 'CSS', 'JavaScript', 'React.JS']}
			/>
		</section>
	);
};

export default Projects;
