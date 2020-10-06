import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';

class Cards extends Component {
	render() {
		return (
			<div className="cards background safari_only" id="cards">
				<div className="projects">
					<h1 className="heading-primary u-margin-bottom">Projects</h1>

					<div className="card-container safari_only">
						{this.props.cards.map((card) => {
							return (
								<Card
									key={card.id}
									id={card.id}
									number={card.number}
									title={card.title}
									line1={card.line1}
									line2={card.line2}
									line3={card.line3}
									line4={card.line4}
									line5={card.line5}
									btnsource={card.btnsource}
									text={card.text}
									backtext={card.backtext}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cards: state.cards
	};
};

export default connect(mapStateToProps)(Cards);
