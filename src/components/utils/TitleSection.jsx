import React from 'react';

import '../../css/titleSection.css';

const TitleSection = ({ number, title, name }) => {
	return (
		<div className={'section'}>
			<div className={`${name}-title title`}>
			<span>{number}</span> {title}
			</div>

			<div className={'vertical-line'}>
				<hr />
			</div>
		</div>
	);
};

export default TitleSection;
