import React, {Component} from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false
	};

	async componentDidMount() {
		try {
			this.setState({loading: true});
			const result = await axios.get('https://api.github.com/users');
			this.setState({users: result.data, loading: false});
		} catch (err) {
			console.error(err.message);
		}
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
