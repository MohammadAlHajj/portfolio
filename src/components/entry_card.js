import React, { Component } from "react";
import * as bs from "react-bootstrap";
import Entry from "./entry";

export default class EntryCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
	}
	render() {
		return (
			<div>
				<a style={{ cursor: "pointer" }} onClick={() => this.setState({ showModal: true })}>
					<bs.Card>
						<bs.CardImg variant="top" src="holder.js/185x300" />
						<bs.Card.ImgOverlay>
							<bs.Card.Title>{this.props.name}</bs.Card.Title>
							<bs.Card.Text>{this.props.location}</bs.Card.Text>
							<bs.Card.Text>{this.props.date}</bs.Card.Text>
						</bs.Card.ImgOverlay>
					</bs.Card>
				</a>
				{this.createEntryOverlay()}
			</div>
		);
	}

	createEntryOverlay() {
		return (
			<bs.Modal
				centered
				show={this.state.showModal}
				onHide={() => this.setState({ showModal: false })}
			>
				<bs.Modal.Body>
					<Entry
						name={this.props.name ?? null}
						location={this.props.location ?? null}
						date={this.props.date ?? null}
						title={this.props.title ?? null}
						body={this.props.body ?? null}
						items={this.props.items ?? null}
					/>
				</bs.Modal.Body>
			</bs.Modal>
		);
	}
}
