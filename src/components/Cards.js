import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';

class Cards extends Component {
	render() {
		return (
			<div className="cards background" id="cards">
				<div className="projects">
					<h1 className="heading-primary u-margin-bottom-big">Projects</h1>
				</div>
				<div className="card-container">
					<div className="card-container__row">
						<Card
							id={this.props.one.id}
							number={this.props.one.number}
							title={this.props.one.title}
							line1={this.props.one.line1}
							line2={this.props.one.line2}
							line3={this.props.one.line3}
							line4={this.props.one.line4}
							line5={this.props.one.line5}
							btnsource={this.props.one.btnsource}
							text={this.props.one.text}
							backtext={this.props.one.backtext}
						/>
						<Card
							id={this.props.two.id}
							number={this.props.two.number}
							title={this.props.two.title}
							line1={this.props.two.line1}
							line2={this.props.two.line2}
							line3={this.props.two.line3}
							line4={this.props.two.line4}
							line5={this.props.two.line5}
							btnsource={this.props.two.btnsource}
							text={this.props.two.text}
							backtext={this.props.two.backtext}
						/>
						<Card
							id={this.props.three.id}
							number={this.props.three.number}
							title={this.props.three.title}
							line1={this.props.three.line1}
							line2={this.props.three.line2}
							line3={this.props.three.line3}
							line4={this.props.three.line4}
							line5={this.props.three.line5}
							btnsource={this.props.three.btnsource}
							text={this.props.three.text}
							backtext={this.props.three.backtext}
						/>
					</div>
					<div className="card-container__row">
						<Card
							id={this.props.four.id}
							number={this.props.four.number}
							title={this.props.four.title}
							line1={this.props.four.line1}
							line2={this.props.four.line2}
							line3={this.props.four.line3}
							line4={this.props.four.line4}
							line5={this.props.four.line5}
							btnsource={this.props.four.btnsource}
							text={this.props.four.text}
							backtext={this.props.four.backtext}
						/>
						<Card
							id={this.props.five.id}
							number={this.props.five.number}
							title={this.props.five.title}
							line1={this.props.five.line1}
							line2={this.props.five.line2}
							line3={this.props.five.line3}
							line4={this.props.five.line4}
							line5={this.props.five.line5}
							btnsource={this.props.five.btnsource}
							text={this.props.five.text}
							backtext={this.props.five.backtext}
						/>
						<Card
							id={this.props.six.id}
							number={this.props.six.number}
							title={this.props.six.title}
							line1={this.props.six.line1}
							line2={this.props.six.line2}
							line3={this.props.six.line3}
							line4={this.props.six.line4}
							line5={this.props.six.line5}
							btnsource={this.props.six.btnsource}
							text={this.props.six.text}
							backtext={this.props.six.backtext}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { one: state.one, two: state.two, three: state.three, four: state.four, five: state.five, six: state.six };
};

export default connect(mapStateToProps)(Cards);
