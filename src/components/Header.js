import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col className="text-center fs-1">
            <p>Memory Game</p>
          </Col>
        </Row>
        <Row>
          <Col className=" text-center fs-2">
            <p>Test Your Memory By Answering The Questions.</p>
            <p>Highest Score is 10!</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center fs-3">
            <span>Score: {this.props.score}</span>
          </Col>
          <Col className="text-center fs-3">
            <span>Best Score: {this.props.bestScore} </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
