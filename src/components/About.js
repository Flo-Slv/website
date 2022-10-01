import React from 'react';

import '../css/about.css';

const About = () => {
	return (
		<section id='about'>
			<about>
				<div className={'about-me'}>
					<span>01.</span> À propos de moi
				</div>

				<div className={'vertical-line'}>
					<hr />
				</div>
			</about>

			<description>
				<div className={'text'}>
					<p>
						Bonjour, je m'appelle <i>Florent Sanlaville</i>, mais l'on me surnomme <span>Flo</span> !
					</p>

					<p>
						Apres plusieurs années sans toucher à une ligne de code, après avoir été coach sportif puis sans emploi, je suis de retour dans l'univers du développement web.
					</p>

					<p>
						J'ai travaillé quelques années dans des startups francaises sur des technos comme <span>Node.js</span> et <span>React</span> puis je suis allé chez nos amis helvétique à Basel, pendant 1 an et demi, où je travaillais avec la meme stack.
					</p>

					<p>
						Je vous laisse le soin de consulter mon <a href='#resume'>Curriculum Vitae</a> pour en apprendre plus sur mon parcours professionnel !
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
						J'apprends actuellement <span>TypeScript</span>, grâce à <a href='https://www.executeprogram.com/' target='_blank' rel='noopener noreferrer'>Execute Program</a>, et j'essaie également d'apprendre <span>Rust</span> qui est un langage bas niveau.
					</p>
				</div>

				<div className={'pp'}>
					<img src='./images/face_co.png' alt='Profile' />
				</div>
			</description>

			<langages>

			</langages>
		</section>
	);
};

export default About;
