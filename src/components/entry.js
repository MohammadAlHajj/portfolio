import React, { Component } from "react";
import * as bs from "react-bootstrap";

export default class Entry extends Component {
	render() {
		return (
			<bs.Container style={{backgroundColor:"#0000"}} fluid >
				<bs.Row xs={1} sm={2}>
					<bs.Col xs={12} sm={4} className="my-auto">
						<bs.Image src={this.props.image} fluid />
					</bs.Col>
					<bs.Col xs={12} sm={8}>
						<bs.Row xs={1} sm={3}>
							<bs.Col xs={12} sm={6} children={<strong>{this.props.name}</strong>} />
							<bs.Col xs={12} sm={2} children={this.props.location} />
							<bs.Col xs={12} sm={4} children={this.props.date} />
						</bs.Row>
						{this.props.title ? <bs.Container>{this.props.title}</bs.Container> : null}
						{this.props.body ? <bs.Container>{this.props.body}</bs.Container> : null}
						{this.props.items ? (
							<bs.ListGroup>
								{this.props.items.map((e) => (
									<bs.ListGroupItem style={{backgroundColor:"#0000"}}>{e}</bs.ListGroupItem>
								))}
							</bs.ListGroup>
						) : null}
					</bs.Col>
				</bs.Row>
			</bs.Container>
		);
	}
}
