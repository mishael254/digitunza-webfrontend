import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col, Button} from "reactstrap";
import Skeleton from "react-loading-skeleton"; // Import the Skeleton component

import Api from "./Api";

function Projects() {
  const { statLogs, isLoading } = Api();
  const uniqueProjects = new Set();

  if (isLoading) {
    return (
      <div className="content">
        <Row>
          <Col className="font-icon-list col-xs-6 col-xs-6 clickable-card" lg="2" md="3" sm="4">
            <Card>
              <div>
                <h3>
                  <Skeleton width={100} />
                </h3>
              </div>
              <Skeleton height={150} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <>
      <div className="content">
        <Row className="justify-content-end">
          <Col md="4" className="d-flex justify-content-end">
            <Link to="/admin/create-project">
              <Button block color="primary">
                + Create Project
              </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Projects deployed</h5>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  <>
                    {statLogs.map((log) => {
                      // Skip rendering if the project has already been processed
                      if (uniqueProjects.has(log.project)) {
                        return null;
                      }

                      // Mark the project as processed in the set
                      uniqueProjects.add(log.project);

                      return (
                        <Col
                          key={log.id} // Assuming there's a unique identifier for each project
                          className="font-icon-list col-xs-6 col-xs-6 clickable-card"
                          lg="2"
                          md="3"
                          sm="4"
                        >
                          <Link
                            to={{
                              pathname: `/admin/projects-details/${log.project}`,
                            }}
                          >
                            <div className="font-icon-detail">
                              <i className="tim-icons icon-app" />
                              <p>{log.project}</p>
                            </div>
                          </Link>
                        </Col>
                      );
                    })}

                    {/* Render a blank column if there are no projects */}
                    {!statLogs.length && (
                      <Col
                        className="font-icon-list col-xs-6 col-xs-6 clickable-card"
                        lg="2"
                        md="3"
                        sm="4"
                      >
                        <div className="font-icon-detail">
                          <i className="tim-icons icon-alert-circle-exc" />
                          <p>No projects available</p>
                        </div>
                      </Col>
                    )}
                  </>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Projects;
