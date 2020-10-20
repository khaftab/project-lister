import React from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

function Signin() {
  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "86vh" }}
      >
        <Col md={5} sm={12}>
          <Card className="p-3">
            <Card.Title
              className="text-center text-dark"
              style={{ fontSize: "32px" }}
            >
              Sign In
            </Card.Title>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email"></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Passsword</Form.Label>
                  <Form.Control type="password"></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;
