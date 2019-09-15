import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Search = ({setAlert, searchUsers, showClear, onClear}) => {
	const [text, setText] = useState('');

	const onChange = e => setText(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter some text to search', 'light');
		} else {
			searchUsers(text);
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
			{showClear && (
				<button className="btn btn-light btn-block mb-2" onClick={onClear}>
					Clear Search
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	onClear: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default Search;
