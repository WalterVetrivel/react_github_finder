import React from 'react';
import Users from '../users/Users';
import Search from '../users/Search';

const Home = () => {
	return (
		<React.Fragment>
			<Search />
			<Users />
		</React.Fragment>
	);
};

export default Home;
