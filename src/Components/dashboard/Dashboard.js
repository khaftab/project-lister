import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";

function Dashboard({ projects }) {
  return (
    <div className="container mt-5">
      <Row>
        <Col md={6}>
          <ProjectList projects={projects} />
        </Col>
        <Col md={5}>
          <Notifications />
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
