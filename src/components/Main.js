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
  // padding in all section
  render() {
    //let bookIndx = BookArray.length - 1;
    //let random = Math.round(Math.random() * (bookIndx - 0) + 0);
    return (
      <Container>
        <Row className="justify-content-md-center align-items-center">
          <Col sm={12} md={6}>
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={BookArray[0].imgSrc} />
              <Card.Body>
                <Card.Title>{BookArray[0].title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <p> Have you seen this book?</p>
            </Row>
            <Row>
              <Col>
                <Button variant="light">Light</Button>
              </Col>
              <Col>
                <Button variant="light">Light</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main2;
