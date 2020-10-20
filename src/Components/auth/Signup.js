import React from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

function Signup() {
  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "86vh" }}
      >
        <Col sm={12} md={9} lg={5}>
          <Card className="p-3">
            <Card.Title
              className="text-center text-dark"
              style={{ fontSize: "32px" }}
            >
              Sign Up
            </Card.Title>
            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email"></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Passsword</Form.Label>
                  <Form.Control type="password"></Form.Control>
                </Form.Group>
                <Button variant="primary" typw="submit" block>
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
