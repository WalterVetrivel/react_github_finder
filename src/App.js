import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import User from './components/users/User';

import Alert from './components/layout/Alert';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

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
									path="/user/:username"
									render={props => <User {...props} />}
								/>
								<Route exact path="/about" component={About} />
								<Route exact path="/" component={Home}></Route>
								<Route component={NotFound} />
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
