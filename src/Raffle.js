import React, { Component } from 'react';
import ContestantList from './ContestantList';

class Raffle extends Component {
	render() {
		return (
			<div className="raffle">
				<h1>Raffle</h1>
				<ContestantList />
			</div>
		);
	}
}

export default Raffle;
