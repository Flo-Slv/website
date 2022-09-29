import React from 'react';

import '../css/sidebar.css';

const LeftSidebar = () => {
	return (
		<nav id={'sides'}>
			<ul className={'sidebar'}>
				<li>
					<a
						href='mailto:florent.sanlaville@protonmail.ch'
						rel='noopener noreferrer'
						aria-label='Email'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							role='img'
							aria-label='Email'
						>
							<path d='M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z'/>
						</svg>
					</a>
				</li>

				<li>
					<a
						href='https://youtube.com/channel/UCTV_Ag_ar2f8WIpy3Wbj6zQ'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='YouTube'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							role='img'
							aria-label='YouTube'
						>
							<path d='M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z'
							/>
						</svg>
					</a>
				</li>

				<li>
					<a
						href='https://twitch.tv/lepr3z'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Twitch'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							role='img'
							aria-label='Twitch'
						>
							<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.925 7l-.806 2.06v8.418h2.866v1.522h1.612l1.522-1.522h2.328l3.134-3.134v-7.344h-10.656zm9.582 6.806l-1.791 1.791h-2.866l-1.522 1.522v-1.522h-2.418v-7.522h8.597v5.731zm-1.791-3.672v3.131h-1.075v-3.131h1.075zm-2.866 0v3.131h-1.075v-3.131h1.075z'
							/>
						</svg>
					</a>
				</li>
			</ul>

			<div className={'line'}>
				a
			</div>
		</nav>
	);
};

export default LeftSidebar;
