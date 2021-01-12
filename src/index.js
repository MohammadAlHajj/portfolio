import React from "react";
import ReactDOM from "react-dom";
import Education from "./components/education";
import Experience from "./components/experience";
import Overview from "./components/overview";
import Projects from "./components/projects";
import Skills from "./components/skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
import * as bs from "react-bootstrap";
import "holderjs";


export default class Site extends React.Component {
	static overview = "overview";
	static education = "education";
	static experience = "experience";
	static projects = "projects";
	static skills = "skills";

	constructor(props) {
		super(props);
		this.state = { activeKey: Site.overview };
	}
	render() {
		var tabs = [
			[Site.overview, <Overview changeTab={this.changeTab} />],
			[Site.education, <Education changeTab={this.changeTab} />],
			[Site.experience, <Experience changeTab={this.changeTab} />],
			[Site.projects, <Projects changeTab={this.changeTab} />],
			[Site.skills, <Skills changeTab={this.changeTab} />],
		];
		return (
			<div>
				<bs.Tabs id="sections" activeKey={this.state.activeKey} onSelect={(s)=>this.setState({activeKey: s})}>
					{tabs.map((tab,i) => (
						<bs.Tab key={i} eventKey={tab[0]} title={tab[0]}>
							{tab[1]}
						</bs.Tab>
					))}
				</bs.Tabs>
			</div>
		);
	}

	changeTab = (key) => this.setState({ activeKey: key });
}

// ========================================

ReactDOM.render(<Site />, document.getElementById("root"));
