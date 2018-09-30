import React, { Component } from "react";
import { connect } from "react-redux";
import { removePillar } from "../actions";

class Pillar extends Component {

	constructor(props) {
		super(props);

		this.handleRemoveClick = this.handleRemoveClick.bind(this);
	};

	// events
	handleRemoveClick() {
		const { pillarId, pillar } = this.props;
		console.log(pillarId);
		this.props.removePillar(pillarId);
	};

	// other functions
	render() {
		const { pillarId, pillar } = this.props;
		return (
			<div key="pillarName">
				<h4>
					{pillar.title}{" "}
					<span onClick={this.handleRemoveClick}>
						<i>removed</i>
					</span>
				</h4>
			</div>
		);
	}
}

export default connect(null, { removePillar })(Pillar);