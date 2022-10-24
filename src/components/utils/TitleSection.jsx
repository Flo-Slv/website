import React from 'react';

import '../../css/titleSection.css';

const TitleSection = ({ number, title, name }) => {
	return (
		<div className={'section'}>
			<div className={`${name}-title title`}>
				<span>{number}</span> {title}
			</div>

			<hr />
		</div>
	);
};

export default TitleSection;
