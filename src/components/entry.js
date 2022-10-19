import React, { Component } from "react";
import { Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";

export default class Entry extends Component {
	render() {
		return (
			<Container style={{backgroundColor:"#0000"}} fluid >
				<Row xs={1} sm={2}>
					<Col xs={12} sm={4} className="my-auto">
						<Image src={this.props.image} fluid />
					</Col>
					<Col xs={12} sm={8}>
						<Row xs={1} sm={3}>
							<Col xs={12} sm={6} children={<strong>{this.props.name}</strong>} />
							<Col xs={12} sm={2} children={this.props.location} />
							<Col xs={12} sm={4} children={this.props.date} />
						</Row>
						{this.props.title ? <Container>{this.props.title}</Container> : null}
						{this.props.body ? <Container>{this.props.body}</Container> : null}
						{this.props.items ? (
							<ListGroup>
								{this.props.items.map((e) => (
									<ListGroupItem style={{backgroundColor:"#0000"}}>{e}</ListGroupItem>
								))}
							</ListGroup>
						) : null}
					</Col>
				</Row>
			</Container>
		);
	}
}
