import React, {Component} from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar title="GithubFinder" icon={faGithub} />
				<UserItem />
			</div>
		);
	}
}

export default App;
