import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';

import './App.css';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

const App = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);

	const searchUsers = async name => {
		try {
			setLoading(true);
			const result = await axios.get(
				`https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			setUsers(result.data.items);
			setLoading(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	const getUser = async username => {
		try {
			setLoading(true);
			const result = await axios.get(
				`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			setUser(result.data);
			setLoading(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	const getUserRepos = async username => {
		try {
			setLoading(true);
			const result = await axios.get(
				`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			setRepos(result.data);
			setLoading(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	const onClear = () => setUsers([]);

	const setAlertHandler = (msg, type) => {
		setAlert({msg, type});
		setTimeout(() => setAlert(null), 5000);
	};

	const onCloseAlert = () => setAlert(null);

	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="container">
					<Alert alert={alert} onClose={onCloseAlert} />
					<Switch>
						<Route
							path="/"
							exact
							render={() => (
								<React.Fragment>
									<Search
										searchUsers={searchUsers}
										onClear={onClear}
										showClear={users.length > 0}
										setAlert={setAlertHandler}
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
									getUser={getUser}
									getUserRepos={getUserRepos}
									user={user}
									repos={repos}
									loading={loading}
								/>
							)}
						/>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
