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
						Bonjour, je m'appelle Florent Sanlaville, mais l'on me surnomme Flo !
					</p>

					<p>
						Apres plusieurs annees sans toucher a une ligne de code et avoir ete coach sportif puis sans emploi, je suis de retour dans l'univers du developpement web.
					</p>

					<p>
						J'ai travaille quelques annees dans des startups francaises sur des technos comme Node.js et React puis je suis alle chez nos amis helvetique a Basel pendant 1 an et demi ou je travaillais avec la meme stack.
					</p>

					<p>
						Je vous laisse le soin de consulter mon <a href='#resume'>CV</a> pour en apprendre plus sur mon parcours professionnel !
					</p>

					<p>
						J'adore le web et tout ce qui s'en approche. J'aime configurer mon setup et je suis un fervent supporter de Vim et de son successeur Neovim.
					</p>

					<p>
						Je me definis comme un <i>esprit vif</i>. Je suis a l'aise avec les technos que je ne connais pas car je sais que je suis capable de les assimiler rapidement.
					</p>

					<p>
						J'aime le challenge mais je tends maintenant a me poser et devenir un expert dans l'ecosysteme JavaScript, back comme front.
					</p>

					<p>
						J'apprends actuellement TypeScript grace a Execute Program et j'essaie egalement d'apprendre egalement Rust qui est un langage bas niveau.
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
