import React, { Component } from "react";
import Entry from "./entry";
import * as RB from "react-bootstrap";

export default class Education extends Component {
	render() {
		return (
			<RB.Container>
				<h3>Education</h3>
				<hr />
				<Entry
					name="American University of Beirut (AUB)"
					location="Lebanon"
					date="09/2011 – 06/2015"
					title="Bachelor in Computer Science"
					body="Relevant Courses Taken: C/C++ Programming, Software Engineering, Algorithms and Data Structured, Web Programming and Design, Database Systems"
				/>
			</RB.Container>
		);
	}
}
