import React from "react";
import { Card } from "react-bootstrap";

function ProjectSummery({ project }) {
  return (
    <div>
      <Card style={{ border: "none" }}>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <p>Posted by net ninja</p>
          <p className="text-secondary">17 October, 2020</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectSummery;
