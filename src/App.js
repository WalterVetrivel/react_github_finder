import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';

import './App.css';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
		user: {}
	};

	searchUsers = async name => {
		try {
			this.setState({loading: true});
			const result = await axios.get(
				`https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			this.setState({users: result.data.items, loading: false});
		} catch (err) {
			console.log(err.message);
		}
	};

	getUser = async username => {
		this.setState({loading: true});
		const result = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({user: result.data, loading: false});
	};

	onClear = () => this.setState({users: []});

	setAlert = (msg, type) => {
		this.setState({alert: {msg, type}});
		setTimeout(() => this.setState({alert: null}), 5000);
	};

	onCloseAlert = () => this.setState({alert: null});

	render() {
		const {users, loading, alert, user} = this.state;
		return (
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<Alert alert={alert} onClose={this.onCloseAlert} />
						<Switch>
							<Route
								path="/"
								exact
								render={props => (
									<React.Fragment>
										<Search
											searchUsers={this.searchUsers}
											onClear={this.onClear}
											showClear={users.length > 0}
											setAlert={this.setAlert}
										/>
										<Users loading={loading} users={users} />
									</React.Fragment>
								)}></Route>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/user/:username"
								render={props => (
									<User
										{...props}
										getUser={this.getUser}
										user={user}
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
