import React from 'react';

const SideProject = ({
	side,
	imgSource,
	title,
	link,
	github,
	text,
	languages
}) => {
	return (
		<div className={'project'}>
			{side === 'left' && (
				<img
					src={`./images/${imgSource}`}
					alt={`${title}`}
				/>)}

			<div className={`${side}-content`}>
				<h3>
					<a
						href={`${link}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						{title}
					</a>
				</h3>

				<div className={'text'}>
					{text}
				</div>

				<div className={`${side}-span`}>
					{languages.map(language => {
						if (language === 'Vanta.js')
							return (
								<span key={language}>
									<a
										href='https://www.vantajs.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Vanta.js
									</a>
								</span>
							);
						else if (language === 'Vite')
							return (
								<span key={language}>
									<a
										href='https://www.vitejs.dev/'
										target='_blank'
										rel='noopener noreferrer'
									>
										Vite
									</a>
								</span>
							);

						return (<span key={language}>{language}</span>);
					})}
				</div>

				<div className={`${side}-links`}>
					<a
						href={`https://github.com/Flo-Slv/${github}`}
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

					{link &&
					<a
						href={`${link}`}
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

			{side === 'right' &&
				<img
					src={`./images/${imgSource}`}
					alt={`${title}`}
					className={`${side}-img`}
				/>
			}
		</div>
	);
};

export default SideProject;
