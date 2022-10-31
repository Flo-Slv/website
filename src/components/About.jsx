import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { accesParams, playlistEndpoint } from '../utils/spotifyBasic.js';
import TitleSection from './utils/TitleSection.jsx';

import '../css/about.css';

const About = () => {
	const [spotify, setSpotify] = useState();
	const [isSpotifyOpen, setIsSpotifyOpen] = useState(Boolean(false));

	useEffect(() => {
		(async () => {
			try {
				// Get Spotify access token.
				const res = await axios.post(
					accesParams.url,
					accesParams.data,
					accesParams.headers
				);

				// Get Spotify playlist.
				if (res.data.access_token) {
					try {
						const playlist = await axios.get(
							playlistEndpoint,
							{
								headers: {
									'Authorization': `Bearer ${res.data.access_token}`
								}
							}
						);

						setSpotify(playlist.data);
					} catch (err) {
						console.error(err);
					}
				}
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<section id='about'>
			<TitleSection
				number={'01.'}
				title={'À propos de moi'}
				name={'about-me'}
			/>

			<div className={'about-description'}>
				<div className={'text'}>
					<p>
						Bonjour, je m'appelle <span className={'full-name'}>Florent Sanlaville</span>, mais l'on me surnomme <span>Flo</span> !
					</p>

					<p>
						Après plusieurs années sans toucher à une ligne de code, après avoir été coach sportif puis sans emploi, je suis de retour dans l'univers du développement web (Janvier 2023). Je suis à l'écoute d'une <span>nouvelle opportunité</span> professionnelle.
					</p>

					<p>
						J'ai travaillé quelques années dans des startups francaises sur des technos comme <span>Node.js</span> et <span>React.js</span> puis je suis allé chez nos amis helvétique à Basel, pendant 1 an et demi, où je travaillais avec la même stack.
					</p>

					<p>
						Voici mon <a href='#resume'>Curriculum Vitae</a> pour en apprendre plus sur mon parcours professionnel !
					</p>

					<p>
						J'adore le web et tout ce qui s'en approche. J'aime configurer mon setup et je suis un fervent utilisateur de <span>Vim</span> et de son successeur <span>Neovim</span>.
					</p>

					<p>
						Je me definis comme un <i>esprit vif</i>. Je suis à l'aise avec les technos que je ne connais pas car je sais que je suis capable de les assimiler rapidement.
					</p>

					<p>
						J'aime le challenge mais je tends maintenant à me poser et devenir un expert dans l'écosysteme <span>JavaScript</span>, back comme front.
					</p>

					<p>
						Grâce à <a href='https://www.executeprogram.com/' target='_blank' rel='noopener noreferrer'>Execute Program</a>, j'apprends <span>TypeScript</span>, et j'essaie également de me former sur <span>Rust</span> qui est un langage bas niveau.
					</p>
				</div>

				<div className={'pp'}>
					<figure>
						<figcaption>Flo Slv, 2022</figcaption>
					</figure>
				</div>
			</div>

			<button onClick={() => setIsSpotifyOpen(!isSpotifyOpen)}>
				Voir ma playlist Spotify du moment
			</button>

			{(spotify && isSpotifyOpen) && (
				<div id='spotify'>
					<ul className={'tracks'}>
						{spotify.tracks.items.map((item, i) =>
							<li key={i}>
								{console.log('item.track: ', item.track)}
								<iframe
									style={{ borderRadius: '12px' }}
									src={`https://open.spotify.com/embed/track/${item.track.id}?utm_source=generator`}
									width='70%'
									height='352'
									frameBorder='0'
									allow='clipboard-write; encrypted-media; fullscreen; picture-in-picture'
									loading='lazy'
									>
								</iframe>
							</li>
						)}
					</ul>


					<a
						href={spotify.external_urls.spotify}
						target='_blank'
						>
						Voir ma playlist sur Spotify
					</a>
				</div>
			)}
		</section>
	);
};

export default About;
