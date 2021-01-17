import React, { Component } from "react";
import * as bs from "react-bootstrap";
import Entry from "./entry";
import { LandscapeMode, PortraitMode } from "./helpers/MediaQueryHelpers";

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
				<bs.Button
					style={{ cursor: "pointer" }}
					variant="link"
					onClick={() => this.setState({ showModal: true })}
				>
					<bs.Card
						style={{
							width: 185,
							height: 300,
							background: "#BBBC",
							borderRadius: "0.5em",
							backgroundClip: "border-box",
						}}
					>
						<bs.CardImg
							variant="top"
							src={this.props.imageV ? this.props.imageV : "holder.js/185x300"}
						/>
					</bs.Card>
				</bs.Button>
				{this.createEntryOverlay()}
			</div>
		);
	}

	createEntryOverlay() {
		const portView = (
			
			<bs.Card className="translucent" bg='dark'>
				<bs.Card.Header className="translucent">
					<bs.Card.Title>{this.props.name}</bs.Card.Title>
				</bs.Card.Header>
				<bs.CardImg
					variant="top"
					fluid
					src={this.props.imageSqr ? this.props.imageSqr : "holder.js/185x185"}
				></bs.CardImg>
				<bs.Card.Body>
					<bs.Card.Text>{this.props.location}</bs.Card.Text>
					<bs.Card.Text>{this.props.date}</bs.Card.Text>
					{this.props.title ? <bs.Card.Text>{this.props.title}</bs.Card.Text> : <bs.Container />}
					{this.props.body ? <bs.Card.Text>{this.props.body}</bs.Card.Text> : <bs.Container />}
					{this.props.items ? (
						<bs.ListGroup>
							{this.props.items.map((e) => (
								<bs.ListGroupItem style={{backgroundColor:"#0000"}}>{e}</bs.ListGroupItem>
							))}
						</bs.ListGroup>
					) : (
						<bs.Container />
					)}
				</bs.Card.Body>
			</bs.Card>
		);

		const landView = (
			<Entry
				name={this.props.name ?? null}
				location={this.props.location ?? null}
				date={this.props.date ?? null}
				title={this.props.title ?? null}
				body={this.props.body ?? null}
				items={this.props.items ?? null}
				image={this.props.imageSqr ?? null}
			/>
		);

		return (
			<bs.Modal
				contentClassName="translucent"
				size="xl"
				centered
				show={this.state.showModal}
				onHide={() => this.setState({ showModal: false })}
			>
				<bs.Modal.Header className="translucent" closeButton />
				<bs.Modal.Body className="translucent">
					<LandscapeMode>{landView}</LandscapeMode>
					<PortraitMode>{portView}</PortraitMode>
				</bs.Modal.Body>
			</bs.Modal>
		);
	}
}
