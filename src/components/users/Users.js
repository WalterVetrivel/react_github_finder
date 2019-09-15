import React, {useContext} from 'react';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import GithubContext from '../../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);

	return (
		<div style={userStyle}>
			{githubContext.loading ? (
				<Spinner />
			) : githubContext.users.length > 0 ? (
				githubContext.users.map(user => <UserItem key={user.id} user={user} />)
			) : (
				<h4>Enter query to search...</h4>
			)}
		</div>
	);
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users;
