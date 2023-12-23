

import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Table, Row, Col, CardTitle } from "reactstrap";
import Api from "./Api";
import Skeleton from "react-loading-skeleton";

function ProjectDetails() {
  const { projectName } = useParams();
  const { isLoading, statLogs } = Api();

  if (isLoading) {
    return (
      <div className="content">
      <Row>
        <Col md="12">
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
  } else if (statLogs.length === 0) {
    return (
      <div className="content">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <div>No project details available for {projectName}</div>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  // Assuming headers are the keys of the first statLog
  const headers = Object.keys(statLogs[0]);

  // Filter statLogs based on the project name
  const projectDetails = statLogs.filter((log) => log.project === projectName);

  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container"></div>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">{projectName} Projects</CardTitle>
                <h6 className="title d-inline">Tasks({projectDetails.length}) </h6>
                <p className="card-category d-inline">today</p>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {projectDetails.map((detail, rowIndex) => (
                      <tr key={rowIndex}>
                        {headers.map((header) => (
                          <td key={header}>{detail[header]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProjectDetails;
