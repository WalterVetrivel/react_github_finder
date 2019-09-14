import React from 'react';
import PropTypes from 'prop-types';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Navbar = props => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<FontAwesomeIcon icon={props.icon} className="mr-h" />
				{props.title}
			</h1>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'GithubFinder',
	icon: faGithub
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired
};

export default Navbar;
