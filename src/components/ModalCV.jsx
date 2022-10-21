import React, { useEffect } from 'react';

import '../css/modalCV.css';

const ModalCV = ({ toggleModal }) => {
	const closeModalOnEscapeKey = e => {
	    if ((e.charCode || e.keyCode) === 27) toggleModal();
	};

	useEffect(() => {
		document.body.addEventListener('keydown', closeModalOnEscapeKey);

		return () => {
			document.body.removeEventListener('keydown', closeModalOnEscapeKey);
		}
	}, []);

	return (
		<div className={'modal-container'} >
			<div className={'modal'} onClick={() => toggleModal()}>
				<div className={'modal-content'} onClick={e => e.stopPropagation()}>
					<div className={'modal-header'}>
						<button className={'download'}>
							<a href='/download/CV-Flo-fr.pdf' download>
								Télécharger
							</a>
						</button>

						<h4 className={'modal-title'}>
							Curriculum Vitae
						</h4>

						<button
							className={'close'}
							onClick={() => toggleModal()}
						>
							Fermer
						</button>
					</div>

					<div className={'modal-body'}>
						<iframe
							src='/download/CV-Flo-fr.pdf'
							title='CV Flo Slv'
						>
						</iframe>
					</div>

					<div className={'modal-footer'}>
						Flo Slv - 2022
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalCV;
