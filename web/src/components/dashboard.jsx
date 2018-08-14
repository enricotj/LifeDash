import "../styles/components/dashboard.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import Pillar from "./pillar";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addFormVisible: false,
			addFormValue: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	};

	componentDidMount() {
		this.props.fetchPillars();
	};

	// events
	handleInputChange() {
		this.setState(prevState => ({ addFormValue: event.target.value }));
	};

	handleFormSubmit() {
		const { addFormValue } = this.state;
		const { addPillar } = this.props;
		event.preventDefault();
		addPillar({ title: addFormValue });
		this.setState(prevState => ({ addFormValue: "" }));
	};

	// other functions
	renderAddForm() {
		const { addFormVisible, addFormValue } = this.state;
		if (addFormVisible) {
			return (
				<div id="pillar-add-form" className="col s10 offset-s1">
					<form onSubmit={this.handleFormSubmit}>
						<div className="input-field">
							<i className="material-icons prefix">note_add</i>
							<input
								value={addFormValue}
								onChange={this.handleInputChange}
								id="pillarNew"
								type="text"
							/>
							<label htmlFor="pillarNew">A New Life Pillar</label>
						</div>
						<button onClick={this.handleFormSubmit} className="btn-submit">
							Submit
						</button>
					</form>
				</div>
			);
		}
	};

	renderPillars() {
		const { data } = this.props;
		const pillars = _.map(data, (value, key) => {
			return <Pillar key={key} pillarId={key} pillar={value} />;
		});
		if (!_.isEmpty(pillars)) {
			return pillars;
		}
		return (
			<div className="col s10 offset-s1 center-align">
				<h4>You have no pillars</h4>
				<p>Start by clicking add button in the bottom of the screen</p>
			</div>
		);
	}

	render() {
		const { addFormVisible } = this.state;
		return (
			<div className="pillar-list-container">
				<div className="row">
					{this.renderAddForm()}
					{this.renderPillars()}
				</div>
				<div className="fixed-action-btn">
					<button
						onClick={() => this.setState(prevState => ({ addFormVisible: !addFormVisible }))}
						className="btn-floating btn-large teal darken-4"
					>
						{addFormVisible ? (
							<i className="large material-icons">close</i>
						) : (
							<i className="large material-icons">add</i>
						)}
					</button>
				</div>
				<h1>{this.state.addFormValue}</h1>
			</div>
		);
	}
}

const mapStateToProps = ({ data }) => {
	return {
		data
	};
};

export default connect(mapStateToProps, actions)(Dashboard);