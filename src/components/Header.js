import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
class Header extends Component {
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
            <span>Score:0</span>
          </Col>
          <Col className="text-center fs-3">
            <span>Best Score:0</span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
