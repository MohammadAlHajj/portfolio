import React, { Component } from "react";
import * as bs from "react-bootstrap";

export default class Skills extends Component {
	render() {
		return (
			<bs.Container>
				<h3>Skills</h3>
				<hr />
				<p>Languages: Fluent in English and Arabic (writing, reading and speaking)</p>

				<p>Techincal</p>
				<bs.Accordion>
					<bs.Card>
						<bs.Card.Header>
							<bs.AccordionToggle eventKey="0">Languages</bs.AccordionToggle>
						</bs.Card.Header>
						<bs.Accordion.Collapse eventKey="0">
							<bs.Card.Body>
								<bs.ListGroup horizontal>
									{[
										"Java",
										"Dart",
										"PHP",
										"JavaScript",
										"SQL",
										"Mongo",
										"C/C++",
										"Blueprints (Unreal Engine)",
									].map((s) => (
										<bs.ListGroup.Item>{s}</bs.ListGroup.Item>
									))}
								</bs.ListGroup>
							</bs.Card.Body>
						</bs.Accordion.Collapse>
					</bs.Card>

					<bs.Card>
						<bs.Card.Header>
							<bs.AccordionToggle eventKey="1">Platforms</bs.AccordionToggle>
						</bs.Card.Header>
						<bs.Accordion.Collapse eventKey="1">
							<bs.Card.Body>
								<bs.ListGroup horizontal>
									{[
										"Flutter",
										"Android",
										"React",
										"MySQL",
										"Gradle",
										"Hibernate",
										"HTML &CSS",
										"JavaFX",
										"Java Swing",
										"JSP",
										"JSF & richfaces",
										"Autocad",
									].map((s) => (
										<bs.ListGroup.Item>{s}</bs.ListGroup.Item>
									))}
								</bs.ListGroup>
							</bs.Card.Body>
						</bs.Accordion.Collapse>
					</bs.Card>

					<bs.Card>
						<bs.Card.Header>
							<bs.AccordionToggle eventKey="2">IDEs and Utilities</bs.AccordionToggle>
						</bs.Card.Header>
						<bs.Accordion.Collapse eventKey="2">
							<bs.Card.Body>
								<bs.ListGroup horizontal>
									{[
										"Android Studio",
										"Atom",
										"Eclipse",
										"Git",
										"Intellij",
										"Postman",
										"Unreal Engine 4",
										"VSCode",
										"wamp",
									].map((s) => (
										<bs.ListGroup.Item>{s}</bs.ListGroup.Item>
									))}
								</bs.ListGroup>
							</bs.Card.Body>
						</bs.Accordion.Collapse>
					</bs.Card>
				</bs.Accordion>
			</bs.Container>
		);
	}
}
