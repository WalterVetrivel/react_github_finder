import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';

import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {
	const [alert, setAlert] = useState(null);

	const setAlertHandler = (msg, type) => {
		setAlert({msg, type});
		setTimeout(() => setAlert(null), 5000);
	};

	const onCloseAlert = () => setAlert(null);

	return (
		<GithubState>
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
											setAlert={setAlertHandler}
										/>
										<Users />
									</React.Fragment>
								)}></Route>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/user/:username"
								render={props => <User {...props} />}
							/>
						</Switch>
					</div>
					<Footer />
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
