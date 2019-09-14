import React from 'react';
import {Link} from 'react-router-dom';
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
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
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
