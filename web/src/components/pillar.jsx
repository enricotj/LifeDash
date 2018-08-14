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
		const { removePillar } = this.props;
		removePillar(removePillar);
	};

	// other functions
	render() {
		const { pillarId, pillar } = this.props;
		return (
			<div key="pillarName" className="col s10 offset-s1 pillar teal">
				<h4>
					{pillar.title}{" "}
					<span
						onClick={() => this.handleRemoveClick(pillarId)}
						className="remove-pillar waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
					>
						<i className="large material-icons">removed</i>
					</span>
				</h4>
			</div>
		);
	}
}

export default connect(null, { removePillar })(Pillar);