import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>404: Page not found</h1>
			<p className="lead">This page does not exist.</p>
			<Link to="/">Back Home</Link>
		</div>
	);
};

export default NotFound;
