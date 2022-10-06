import React from 'react';

import '../../css/titleSection.css';

const TitleSection = ({ side, number, title, name }) => {
	return (
		<div className={`section-${side}`}>
			<div className={`${name}-title title-${side}`}>
			<span>{number}</span> {title}
			</div>

			<div className={'vertical-line'}>
				<hr />
			</div>
		</div>
	);
};

export default TitleSection;
