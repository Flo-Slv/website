import React, { useState } from 'react';

import '../css/experience.css';

const Experience = () => {
	const [item, setItem] = useState('jacando');

	const toggle = name => setItem(name);

	return (
		<section id='experience'>
			<div className={'titleSectionRight'}>
				<div className={'experience'}>
					<span>02.</span> Expérience
				</div>

				<div className={'vertical-line'}>
					<hr />
				</div>
			</div>

			<div className={'accordion'}>
				<div className={'accordion-menu'}>
					<div
						className={`accordion-title ${item === 'jacando' ? 'active-title' : ''}`}
						onClick={() => toggle('jacando')}
					>
						Jacando
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
						<div className={'content-date'}>Octobre 2018 a Avril 2021</div>
						<ul>
							<li>React JS, node.js</li>
						</ul>
					</div>

					<div
						className={item === 'aircampus' ? 'active-content' : 'non-active'}
					>
						<div className={'content-job'}>
							Junior web developer <a href='https://aircampus.co' target='_blank' rel='noopener noreferrer'>@AirCampus</a>
						</div>
						<div className={'content-date'}>Mars 2017 a Octobre 2018</div>
					</div>

					<div
						className={item === 'teewii' ? 'active-content' : 'non-active'}
					>
						<div className={'content-job'}>
							Junior full-stack developer <a href='https://www.teewii.fr' target='_blank' rel='noopener noreferrer'>@Teewii</a>
						</div>
						<div className={'content-date'}>Octobre 2016 a Octobre 2018</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
