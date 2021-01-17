import React, { Component } from "react";
import * as bs from "react-bootstrap";

function makeIcon(name, width = 100, height = 100, original = true, wordmark = false, ext = "svg") {
	const path =
		process.env.PUBLIC_URL +
		("/icons/" + name + "/") +
		(name + (original ? "-original" : "-plain") + (wordmark ? "-wordmark" : "") + "." + ext);
	return <bs.Image src={path} width={width} height={height} />;
}

export default class Skills extends Component {
	render() {
		const iconSize = 100;
		return (
			<bs.Container fluid>
				<h3>Skills</h3>
				<hr />
				<p>Languages: Fluent in English and Arabic (writing, reading and speaking)</p>

				<p>Techincal</p>

				<bs.Card style={{background:"transparent"}}>
					<bs.Card.Header>Languages</bs.Card.Header>

					<bs.Card.Body>
						<bs.Container fluid>
							<bs.Row>
								{[
									["Java", "java"],
									["Dart", ""],
									["PHP", "php"],
									["JavaScript", "javascript"],
									["SQL", "sql"],
									["MongoDB", "mongodb"],
									["Python", "python"],
									["C/C++", "cplusplus"],
									["Blueprints (Unreal Engine)", "UE4"],
								].map((item) => (
									<bs.Col className="translucent" style={{margin:10}}>
										<bs.Row><bs.Col className="my-auto">{makeIcon(item[1], iconSize, iconSize)}</bs.Col></bs.Row>
										<bs.Row><bs.Col>{item[0]}</bs.Col></bs.Row>
									</bs.Col>
								))}
							</bs.Row>
						</bs.Container>
					</bs.Card.Body>
				</bs.Card>

				<bs.Card style={{background:"transparent"}}>
					<bs.Card.Header>Platforms</bs.Card.Header>
					<bs.Card.Body>
						<bs.Container fluid>
						<bs.Row>
								{[
									["Flutter", "flutter"],
									["Android", "android"],
									["React", "react"],
									["MySQL", "mysql"],
									["Gradle", "gradle", false],
									["Hibernate", "hibernate"],
									["HTML", "html5"],
									["CSS", "css3"],
									["JavaFX", "javafx"],
									["Java Swing", "java-swing"],
									["JSP", "jsp"],
									["JSF & richfaces", "JSF & richfaces"],
									["Autocad", "autocad"],
									["Linux", "linux"],
									["Docker", "docker"],
								].map((item) => (
									<bs.Col className="translucent" style={{margin:10}}>
										<bs.Row><bs.Col className="my-auto">{makeIcon(item[1], iconSize, iconSize)}</bs.Col></bs.Row>
										<bs.Row><bs.Col>{item[0]}</bs.Col></bs.Row>
									</bs.Col>
								))}
							</bs.Row>
						</bs.Container>
					</bs.Card.Body>
				</bs.Card>

				<bs.Card style={{background:"transparent"}}>
					<bs.Card.Header>IDEs and Utilities</bs.Card.Header>
					<bs.Card.Body>
						<bs.Container fluid>
						<bs.Row>
								{[
									["Android Studio", "android=studio"],
									["Atom", "atom"],
									["Eclipse", "eclipse"],
									["Git", "git"],
									["Intellij", "intellij"],
									["Postman", "postman"],
									["Unreal Engine 4", "unreal-engine"],
									["VSCode", "vscode"],
									["JavaFX", "javafx"],
									["WAMP", "wamp"],
								].map((item) => (
									<bs.Col className="translucent" style={{margin:10}}>
										<bs.Row><bs.Col className="my-auto">{makeIcon(item[1], iconSize, iconSize)}</bs.Col></bs.Row>
										<bs.Row><bs.Col>{item[0]}</bs.Col></bs.Row>
									</bs.Col>
								))}
							</bs.Row>
						</bs.Container>
					</bs.Card.Body>
				</bs.Card>
			</bs.Container>
		);
	}
}
