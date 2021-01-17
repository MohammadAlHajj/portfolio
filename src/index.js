import React from "react";
import ReactDOM from "react-dom";
import Education from "./components/education";
import Experience from "./components/experience";
import Overview from "./components/overview";
import Projects from "./components/projects";
import Skills from "./components/skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import * as bs from "react-bootstrap";
import "holderjs";

import bgImg1 from "./assets/images/bg1.jpg";
import bgImg2 from "./assets/images/bg2.jpg";
import bgImg3 from "./assets/images/bg3.jpg";
import bgImg4 from "./assets/images/bg4.jpg";
import bgImg5 from "./assets/images/bg5.jpg";

export default class Site extends React.Component {
	static overview = "overview";
	static education = "education";
	static experience = "experience";
	static projects = "projects";
	static skills = "skills";

	tabs = [
		[Site.overview, <Overview changeTab={this.changeTab} />, bgImg1],
		[Site.education, <Education changeTab={this.changeTab} />, bgImg2],
		[Site.experience, <Experience changeTab={this.changeTab} />, bgImg3],
		[Site.projects, <Projects changeTab={this.changeTab} />, bgImg4],
		[Site.skills, <Skills changeTab={this.changeTab} />, bgImg5],
	];

	constructor(props) {
		super(props);
		this.state = { activeKey: Site.overview };
	}
	render() {
		
		return (
			<bs.Tabs 
				style={{background:"#333333"}}
				id="sections"
				activeKey={this.state.activeKey}
				onSelect={(s) => this.setState({ activeKey: s })}
			>
				{this.tabs.map((tab, i) => (
					<bs.Tab
						key={i}
						eventKey={tab[0]}
						title={tab[0]}
						style={{
							height: "100vh",
							width: "auto",
							backgroundSize: "cover",
							backgroundEepeat: "no-repeat",
							// backgroundPosition: "top center",
							backgroundImage: `url(${tab[2]})`,
						}}
					>
						{tab[1]}
					</bs.Tab>
				))}
			</bs.Tabs>
		);
	}

	changeTab = (key) => this.setState({ activeKey: key });
}

// ========================================

ReactDOM.render(<Site  className="Site" />, document.getElementById("root"));
