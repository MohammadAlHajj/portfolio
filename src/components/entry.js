import React, { Component } from "react";
import * as bs from "react-bootstrap";

export default class Entry extends Component {
	render() {
		return (
			<bs.Container fluid>
				<bs.Row xs={1} sm={2}>
					<bs.Col xs={12} sm={4}  className="my-auto">
						<bs.Image src={this.props.image} fluid />
					</bs.Col>
					<bs.Col xs={12} sm={8}>
						<bs.Row xs={1} sm={3}>
							<bs.Col xs={12} sm={6}>
								{this.props.name}
							</bs.Col>
							<bs.Col xs={12} sm={2}>
								{this.props.location}
							</bs.Col>
							<bs.Col xs={12} sm={4}>
								{this.props.date}
							</bs.Col>
						</bs.Row>
						{this.props.title ? <bs.Container>{this.props.title}</bs.Container> : <bs.Container />}
						{this.props.body ? <bs.Container>{this.props.body}</bs.Container> : <bs.Container />}
						{this.props.items ? (
							<bs.ListGroup>
								{this.props.items.map((e) => (
									<bs.ListGroupItem>{e}</bs.ListGroupItem>
								))}
							</bs.ListGroup>
						) : (
							<bs.Container />
						)}
					</bs.Col>
				</bs.Row>
			</bs.Container>
		);
	}
}
