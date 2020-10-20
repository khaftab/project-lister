import React from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const params = useParams();
  return (
    <Container className="mt-5 md-w-50">
      <Card>
        <Card.Body>
          <Card.Title>This is a Project - {params.id}</Card.Title>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium inventore atque exercitationem error laboriosam placeat.
          </p>
        </Card.Body>
        <Card.Footer>
          <p className="text-secondary">Posted by Net Ninja</p>
          <p className="text-secondary">10 October, 2020</p>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default ProjectDetails;
