import React from 'react';

import TitleSection from './utils/TitleSection.jsx';
import SideProject from './utils/SideProject.jsx';

import '../css/projects.css';

const Projects = () => {
	const projects = [
		{
			side: 'left',
			imgSource: 'link-in-bio.png',
			title: 'Link-in-bio',
			github: 'link-in-bio',
			text: 'Une page web pour afficher mes réseaux sociaux, à la manière de Linktree.',
			languages: ['HTML', 'CSS', 'JavaScript', 'Vanta.js']
		},
		{
			side: 'right',
			imgSource: 'browser.png',
			title: 'Browser homepage',
			github: 'browser-homepage',
			text: "Une page web customisé quand j'ouvre mon navigateur",
			languages: ['HTML', 'CSS']
		},
		{
			side: 'left',
			imgSource: 'flo-slv.png',
			title: 'flo-slv.dev',
			link: 'https://flo-slv.dev',
			github: 'website',
			text: "Mon site web personnel. Créé avec Create React App pour la base. Dans le but d'afficher ma présence sur internet.",
			languages: ['HTML', 'CSS', 'JavaScript', 'React.js']
		}
	];

	return (
		<section id='projects'>
			<TitleSection
				number={'03.'}
				title={'Projets perso'}
				name={'projects'}
			/>

			{projects.map((p, i) => (
				<SideProject 
					key={i}
					side={p.side}
					imgSource={p.imgSource}
					title={p.title}
					link={p.link}
					github={p.github}
					text={p.text}
					languages={p.languages}
				/>
			))}
		</section>
	);
};

export default Projects;
