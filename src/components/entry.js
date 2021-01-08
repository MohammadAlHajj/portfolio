import React, { Component } from "react";

export default class Entry extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
        <p>{this.props.date}</p>
        {this.props.title ? <p>{this.props.title}</p> : <div />}
        {this.props.body ? <p>{this.props.body}</p> : <div />}
        {this.props.items ? (
          <ul>
            {this.props.items.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
