import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
	render() {
		return (
			<div className="gradient">
				<div className="projects">
					<h1 className="header-primary">Projects</h1>
				</div>
				<div className="card-container">
					<Card
						number="1"
						title="The 'ravenous' project"
						line1="ReactJS"
						line2="CSS"
						line3="Yelp API"
						line4="--"
						line5="--"
					/>
					<Card
						number="2"
						title="The 'Jammming' Project"
						line1="ReactJS"
						line2="CSS"
						line3="Spotify API"
						line4="--"
						line5="--"
					/>
					<Card
						number="3"
						title="The 'Streams' Project"
						line1="ReactJS"
						line2="React-Router"
						line3="React-Axios"
						line4="CSS"
						line5="rmtp server"
					/>
					<Card
						number="1"
						title="The 'ravenous' project"
						line1="ReactJS"
						line2="CSS"
						line3="Yelp API"
						line4="--"
						line5="--"
					/>
					<Card
						number="2"
						title="The 'Jammming' Project"
						line1="ReactJS"
						line2="CSS"
						line3="Spotify API"
						line4="--"
						line5="--"
					/>
					<Card
						number="3"
						title="The 'Streams' Project"
						line1="ReactJS"
						line2="React-Router"
						line3="React-Axios"
						line4="CSS"
						line5="rmtp server"
					/>
				</div>
			</div>
		);
	}
}

export default Cards;
