import React from 'react';
import PropTypes from 'prop-types';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({loading, users}) => {
	return (
		<div style={userStyle}>
			{loading ? (
				<Spinner />
			) : users.length > 0 ? (
				users.map(user => <UserItem key={user.id} user={user} />)
			) : (
				<h4>Enter query to search...</h4>
			)}
		</div>
	);
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users;
