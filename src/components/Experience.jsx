import React, { useState } from 'react';

import TitleSection from './utils/TitleSection.jsx';

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
						<div className={'content-date'}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path d='M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z'/>
							</svg>
							Octobre 2018 à Avril 2021
						</div>

						<div className={'content-city'}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/>
							</svg>
							Bâle - Suisse
						</div>

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
						<div className={'content-date'}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path d='M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z'/>
							</svg>
							Mars 2017 à Octobre 2018
						</div>
						<div className={'content-city'}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/>
							</svg>
							Mulhouse - France
						</div>

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
						<div className={'content-date'}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path d='M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z'/>
							</svg>
							Octobre 2016 à Octobre 2018
						</div>
						<div className={'content-city'}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
							>
								<path d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/>
							</svg>
							Mulhouse - France
						</div>

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
