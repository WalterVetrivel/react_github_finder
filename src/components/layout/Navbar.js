import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Navbar extends Component {
	static defaultProps = {
		title: 'GithubFinder',
		icon: faGithub
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.object.isRequired
	};

	render() {
		return (
			<nav className="navbar bg-primary">
				<h1>
					<FontAwesomeIcon icon={this.props.icon} className="mr-h" />
					{this.props.title}
				</h1>
			</nav>
		);
	}
}

export default Navbar;
