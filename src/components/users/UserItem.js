import React, {Component} from 'react';

class UserItem extends Component {
	state = {
		id: '1',
		login: 'WalterVetrivel',
		avatar_url: 'https://avatars0.githubusercontent.com/u/30284493?v=4',
		html_url: 'https://github.com/WalterVetrivel'
	};

	render() {
		const {login, avatar_url, html_url} = this.state;

		return (
			<div className="card text-center">
				<img
					src={avatar_url}
					alt={login}
					className="round-img"
					style={{width: '60px'}}
				/>
				<h3>{login}</h3>
				<a
					href={html_url}
					className="btn btn-dark btn-sm my-1"
					target="_blank"
					rel="noreferrer noopener">
					More
				</a>
			</div>
		);
	}
}

export default UserItem;
