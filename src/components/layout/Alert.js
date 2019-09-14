import React from 'react';
import PropTypes from 'prop-types';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Alert = ({alert, onClose}) => {
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
					onClick={onClose}>
					X
				</span>
			</div>
		)
	);
};

Alert.propTypes = {
	alert: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired
};

export default Alert;
