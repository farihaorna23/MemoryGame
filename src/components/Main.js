import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BookArray } from "./BookArray.js";

class Main2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bookIndx = BookArray.length - 1;
    let random = Math.round(Math.random() * (bookIndx - 0) + 0);
    return (
      <Container className="p-5">
        <Row className="justify-content-md-between align-items-center">
          <Col sm={12} md={6}>
            <Card style={{ width: "14rem" }}>
              <Card.Img variant="top" src={BookArray[0].imgSrc} />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  {BookArray[0].title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <p className="fs-1"> Have you seen this book?</p>
            </Row>
            <Row>
              <Col>
                <Button
                  onClick={this.props.updateScore(random)}
                  variant="light"
                >
                  No
                </Button>
              </Col>
              <Col>
                <Button variant="light">Yes</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main2;
