import React, { Component } from 'react';
import ContestantCard from './ContestantCard';
const data = require('./contestants.json');

class ContestantList extends Component {
	render() {
		return (
			<div className="contestant-list">
				<h2>Contestants</h2>
				<div className="contestants">
					{data.contestants.map((contestant) => (
						<ContestantCard {...contestant} key={contestant.id} />
					))}
				</div>
			</div>
		);
	}
}

export default ContestantList;
