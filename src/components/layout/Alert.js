import React, {useContext} from 'react';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
	const {alert, removeAlert} = useContext(AlertContext);

	return (
		alert !== null && (
			<div
				className={`alert alert-${alert.type}`}
				style={{position: 'relative'}}>
				<FontAwesomeIcon icon={faInfoCircle} className="mr-h" />
				{alert.msg}
				<span
					style={{
						position: 'absolute',
						top: '.5rem',
						right: '10px',
						cursor: 'pointer',
						fontSize: '1.5rem',
						color: '#777'
					}}
					onClick={removeAlert}>
					X
				</span>
			</div>
		)
	);
};

export default Alert;
