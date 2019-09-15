import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const User = ({getUser, getUserRepos, match, user, loading, repos}) => {
	useEffect(() => {
		getUser(match.params.username);
		getUserRepos(match.params.username);
		// eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		company,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = user;

	return !loading ? (
		<div>
			<Link to="/">Back to search</Link>
			<p>
				Hireable:{' '}
				{hireable ? (
					<FontAwesomeIcon icon={faCheck} className="text-success" />
				) : (
					<FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
				)}
			</p>
			<div className="card grid-2">
				<div className="all-center">
					<img
						src={avatar_url}
						alt={login}
						className="round-img"
						style={{width: '150px'}}
					/>
					<h1>{name}</h1>
					<p>Location: {location}</p>
				</div>
				<div>
					{bio && (
						<React.Fragment>
							<h3>Bio</h3>
							<p>{bio}</p>
						</React.Fragment>
					)}
					<a
						href={html_url}
						className="btn btn-dark my-1"
						target="_blank"
						rel="noreferrer noopener">
						Visit Github Profile
					</a>
					<ul>
						<li>
							<strong>Username: </strong>
							{login}
						</li>
						{company && (
							<li>
								<strong>Company: </strong>
								{company}
							</li>
						)}
						{blog && (
							<li>
								<strong>Website: </strong>
								<a href={blog} target="_blank" rel="noreferrer noopener">
									{blog}
								</a>
							</li>
						)}
					</ul>
				</div>
			</div>
			<div className="card text-center">
				<div className="badge badge-primary">Followers: {followers}</div>
				<div className="badge badge-success">Following: {following}</div>
				<div className="badge badge-light">Public Repos: {public_repos}</div>
				<div className="badge badge-dark">Public Gists: {public_gists}</div>
			</div>
			<div>
				<h3 className="mt-2">Latest Repos</h3>
				<Repos repos={repos} />
			</div>
		</div>
	) : (
		<Spinner />
	);
};

User.propTypes = {
	loading: PropTypes.bool,
	user: PropTypes.object.isRequired,
	getUser: PropTypes.func.isRequired,
	getUserRepos: PropTypes.func.isRequired
};

export default User;
