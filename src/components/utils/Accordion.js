import React from 'react';

const Accordion = ({ title, content, onToggle, active }) => {
	return (
		<div className={'accordion-item'}>
			<div
				className={'accordion-title'}
				onClick={onToggle}
			>
				<div>{title}</div>
				<div>{active ? '-' : '+'}</div>
			</div>

			{active &&
				<div className={'accordion-content'}>
					{content}
			</div>
			}
		</div>
	);
};

export default Accordion;
