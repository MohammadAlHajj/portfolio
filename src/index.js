import React from "react";
import ReactDOM from "react-dom";
import Education from "./components/education";
import Experience from "./components/experience";
import Overview from "./components/overview";
import Projects from "./components/projects";
import Skills from "./components/skills";
import "./index.css";

export default class Site extends React.Component {
  render() {
    return (
      <div>
        <Overview />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Site />, document.getElementById("root"));
