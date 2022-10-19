import React, { Component } from "react";
import Entry from "./entry";

export default class Education extends Component {
	render() {
		return (
			<>
				<h3>Education</h3>
				<hr />
				<Entry
					name="American University of Beirut (AUB)"
					location="Lebanon"
					date="09/2011 – 06/2015"
					title="Bachelor in Computer Science"
					body="Relevant Courses Taken: C/C++ Programming, Software Engineering, Algorithms and Data Structured, Web Programming and Design, Database Systems"
				/>
			</>
		);
	}
}
