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
			link: 'https://links.flo-slv.dev',
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
			text: "Mon site web personnel. Créé avec Vite pour la base. Dans le but d'afficher ma présence sur internet.",
			languages: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vite']
		}
	];

	return (
		<section id='projects'>
			<TitleSection
				number={'03.'}
				title={'Projets perso'}
				name={'projects'}
			/>

			<ul className={'project-slider'}>
				{projects.map((p, i) => (
					<li key={i}>
						<img src={`./images/${p.imgSource}`} />
						<div className={'project-slider-content'}>
							<h2>{p.title}</h2>
							<p>{p.text}</p>
							<ul className={'project-slider-languages'}>
								{p.languages.map((l, j) => {
									if (l === 'Vanta.js')
										return (
											<li key={j}>
												<a
													href='https://www.vantajs.com/'
													target='_blank'
													rel='noopener noreferrer'
												>
													Vanta.js
												</a>
											</li>
										);
									else if (l === 'Vite')
										return (
											<li key={j}>
												<a
													href='https://www.vitejs.dev/'
													target='_blank'
													rel='noopener noreferrer'
												>
													Vite
												</a>
											</li>
										);
									return <li key={j}>{l}</li>
								})}
							</ul>

							<div className={'project-slider-svg'}>
								<a
									href={`https://github.com/Flo-Slv/${p.github}`}
									target='_blank'
									rel='noopener noreferrer'
									aria-label='GitHub'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										role='img'
										aria-label='GitHub'
									>
										<path
											d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z'
										/>
									</svg>
								</a>

								{p.link &&
								<a
									href={`${p.link}`}
									target='_blank'
									rel='noopener noreferrer'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
									>
										<path d='M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z'
										/>
									</svg>
								</a>
								}
							</div>
						</div>
					</li>
				))}
			</ul>

			{/*{projects.map((p, i) => (
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
			))}*/}
		</section>
	);
};

export default Projects;
