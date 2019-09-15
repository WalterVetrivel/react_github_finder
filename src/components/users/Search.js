import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';

import GithubContext from '../../context/github/githubContext';

const Search = ({setAlert}) => {
	const githubContext = useContext(GithubContext);
	const [text, setText] = useState('');

	const onChange = e => setText(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter some text to search', 'light');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					id="text"
					placeholder="Search users"
					value={text}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="Search"
					className="btn btn-block btn-success"
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className="btn btn-light btn-block mb-2"
					onClick={githubContext.clearUsers}>
					Clear Search
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	setAlert: PropTypes.func.isRequired
};

export default Search;
