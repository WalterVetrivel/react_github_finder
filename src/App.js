import React, {Component} from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

import './App.css';

class App extends Component {
	state = {
		users: []
	};

	async componentDidMount() {
		try {
			const result = await axios.get('https://api.github.com/users');
			this.setState({users: [...result.data]});
		} catch (err) {
			console.error(err.message);
		}
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Users users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
