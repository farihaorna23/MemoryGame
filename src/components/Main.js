import React, { Component } from "react";

import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { BookArray } from "./BookArray.js";

class Main2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //get the lastIndx of BookArray
    let bookIndx = BookArray.length - 1; //9
    let random = Math.round(Math.random() * (bookIndx - 0) + 0);
    return (
      <Container className="p-4">
        <Row className="justify-content-md-between align-items-center">
          <Col sm={12} md={6}>
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src={BookArray[random].imgSrc} />
              <Card.Body>
                <Card.Title style={{ color: "black", textAlign: "center" }}>
                  {BookArray[random].title}
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
                  onClick={() => this.props.noBtnHander(random)}
                  variant="light"
                >
                  No
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => this.props.yesBtnHandler(random)}
                  variant="light"
                >
                  Yes
                </Button>
              </Col>
              <Col>
                <Button onClick={this.props.startOver} variant="light">
                  Start Over
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main2;
