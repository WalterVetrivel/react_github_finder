import React from 'react';
import PropTypes from 'prop-types';

import UserItem from './UserItem';

const Users = ({users}) => {
	return (
		<div style={userStyle}>
			{users.map(user => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};

Users.propTypes = {
	users: PropTypes.array.isRequired
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users;
