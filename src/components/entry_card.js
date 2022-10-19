import React, { Component } from "react";
import { Button, Card, CardImg, Container, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import Entry from "./entry";
import { LandscapeMode, PortraitMode } from "./helpers/MediaQueryHelpers";

export default class EntryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  render() {
    return (
      <>
        <Button 
          className="m-1"  
          variant="link" onClick={() => this.setState({ showModal: true })}
          style={{
          width: 185,
          height: 300,
          padding: 3,
        }}>
          <Card
            style={{
              background: "#BBBA",
              border: 0,
              margin: 0,
              padding: 0,
            }}
          >
            <CardImg
              // variant="top"
              style={{
                margin: 0,
                padding: 0,
              }}
              src={this.props.imageV ? this.props.imageV : "holder.js/185x300"}
            />
          </Card>
        </Button>
        {this.createEntryOverlay()}
      </>
    );
  }

  createEntryOverlay() {
    const portView = (
      <Card className="translucent" bg="dark">
        <Card.Header className="translucent">
          <Card.Title>{this.props.name}</Card.Title>
        </Card.Header>
        <CardImg
          variant="top"
          fluid
          src={this.props.imageSqr ? this.props.imageSqr : "holder.js/185x185"}
        ></CardImg>
        <Card.Body>
          <Card.Text>{this.props.location}</Card.Text>
          <Card.Text>{this.props.date}</Card.Text>
          {this.props.title ? <Card.Text>{this.props.title}</Card.Text> : <Container />}
          {this.props.body ? <Card.Text>{this.props.body}</Card.Text> : <Container />}
          {this.props.items ? (
            <ListGroup>
              {this.props.items.map((e) => (
                <ListGroupItem key={e} style={{ backgroundColor: "#0000" }}>{e}</ListGroupItem>
              ))}
            </ListGroup>
          ) : (
            <Container />
          )}
        </Card.Body>
      </Card>
    );

    const landView = (
      <Entry
        name={this.props.name ?? null}
        location={this.props.location ?? null}
        date={this.props.date ?? null}
        title={this.props.title ?? null}
        body={this.props.body ?? null}
        items={this.props.items ?? null}
        image={this.props.imageSqr ?? null}
      />
    );

    return (
      <Modal
        contentClassName="translucent"
        size="xl"
        centered
        show={this.state.showModal}
        onHide={() => this.setState({ showModal: false })}
      >
        <Modal.Header className="translucent" closeButton />
        <Modal.Body className="translucent">
          <LandscapeMode>{landView}</LandscapeMode>
          <PortraitMode>{portView}</PortraitMode>
        </Modal.Body>
      </Modal>
    );
  }
}
