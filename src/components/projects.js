import React, { Component } from "react";
import * as bs from 'react-bootstrap';

export default class Projects extends Component {
  render() {
    return (
      <bs.Container>
        <h3>Projects</h3>
        <hr />
        <p>Software Projects</p>
        <ul>
          <li>Yanstra Mobile</li>
          <li>Lightboard</li>
          <li>Endless Runner</li>
          <li>Object Oriented World</li>
        </ul>
        <p>Engineering Projects</p>
        <ul>
          <li>Al-Amira 2 (Project Manager)</li>
          <li>Al-Bayadah Petrol Station (Project Manager)</li>
          <li>Safad Al Battikh Elevated Water Tank (Supervisor)</li>
          <li>Lebanese Army Prfabricated Housing 2018 (Supervisor)</li>
        </ul>
      </bs.Container>
    );
  }
}
