import React, { useState } from 'react';

import TitleSection from './utils/TitleSection.js';

import '../css/experience.css';

const Experience = () => {
	const [item, setItem] = useState('jacando');

	const toggle = name => setItem(name);

	return (
		<section id='experiences'>
			<TitleSection
				number={'02.'}
				title={'Expériences pro'}
				name={'experience'}
			/>

			<div className={'accordion'}>
				<div className={'accordion-menu'}>
					<div
						className={`accordion-title ${item === 'jacando' ? 'active-title' : ''}`}
						onClick={() => toggle('jacando')}
					>
						Jacando AG
					</div>

					<div
						className={`accordion-title ${item === 'aircampus' ? 'active-title' : ''}`}
						onClick={() => toggle('aircampus')}
					>
						AirCampus
					</div>

					<div
						className={`accordion-title ${item === 'teewii' ? 'active-title' : ''}`}
						onClick={() => toggle('teewii')}
					>
						Teewii
					</div>
				</div>

				<div className={'accordion-content'}>
					<div
						className={item === 'jacando' ? 'active-content' : 'non-active'}
					>
						<div className={'content-job'}>
							Junior full-stack developer <a href='https://www.jacando.com/' target='_blanck' rel='noopener noreferrer'>@Jacando</a>
						</div>
						<div className={'content-date'}>Octobre 2018 à Avril 2021</div>
						<div className={'content-city'}>Bâle - Suisse</div>
						<ul>
							<li>Node.js, Express.js</li>
							<li>GraphQL, Apollo server & client</li>
							<li>JavaScript, React.js</li>
							<li>Je travaillais à la fois sur des tâches liées au Back-end et au Front-end. Je faisais également de l'intégration entre le Back et le Front.</li>
							<li>A cause de la crise du Covid-19, je me suis retrouvé à 0% de temps de travail entre Février 2020 et Avril 2021, date à laquelle j'ai quitté l'entreprise.</li>
						</ul>
					</div>

					<div
						className={item === 'aircampus' ? 'active-content' : 'non-active'}
					>
						<div className={'content-job'}>
							Junior web developer <a href='https://aircampus.co' target='_blank' rel='noopener noreferrer'>@AirCampus</a>
						</div>
						<div className={'content-date'}>Mars 2017 à Octobre 2018</div>
						<div className={'content-city'}>Mulhouse - France</div>
						<ul>
							<li>Node.js, Express.js, Next.js</li>
							<li>JavaScript, React.js</li>
							<li>Je travaillais à la fois sur des tâches liées au Back-end et au Front-end.</li>
						</ul>
					</div>

					<div
						className={item === 'teewii' ? 'active-content' : 'non-active'}
					>
						<div className={'content-job'}>
							Junior full-stack developer <a href='https://www.teewii.fr' target='_blank' rel='noopener noreferrer'>@Teewii</a>
						</div>
						<div className={'content-date'}>Octobre 2016 à Octobre 2018</div>
						<div className={'content-city'}>Mulhouse - France</div>
						<ul>
							<li>Node.js, Express.js, Next.js</li>
							<li>JavaScript, React.js</li>
							<li>Amazon Web Services</li>
							<li>API: cloudinary & allMySMS</li>
							<li>NodeCron</li>
							<li>Internationalisation: i18n & react-i18next</li>
							<li>Je travaillais à la fois sur des tâches liées au Back-end et au Front-end.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
