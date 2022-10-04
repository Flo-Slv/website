import React, { useState } from 'react';

import Accordion from './utils/Accordion.js';
import accordionData from './utils/accordionData.js';

import '../css/experience.css';

const Experience = () => {
	const [clicked, setClicked] = useState('0');

	const onToggle = index => {
		if (clicked === index) return setClicked('0');

		return setClicked(index);
	};

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
				{accordionData.map(({ title, content }, index) => (
					<Accordion
						key={index}
						onToggle={() => onToggle(index)}
						active={
							clicked === index ? Boolean(true) : Boolean(false)
						}
						title={title}
						content={content}
					/>
				))}
			</div>
		</section>
	);
};

export default Experience;
