import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';

import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className="App">
						<Navbar />
						<div className="container" style={{minHeight: '65vh'}}>
							<Alert />
							<Switch>
								<Route
									path="/"
									exact
									render={() => (
										<React.Fragment>
											<Search />
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
			</AlertState>
		</GithubState>
	);
};

export default App;
