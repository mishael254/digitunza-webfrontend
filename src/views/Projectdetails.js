

import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Table, Row, Col, CardTitle } from "reactstrap";
import Api from "./Api";
import Skeleton from "react-loading-skeleton";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function ProjectDetails() {
  const { projectName } = useParams();
  const { isLoading, statLogs } = Api();
  const value1 = 0.16;
  const value2 = 0.66;
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
          {/**testing react progressbars  */}
          <Col md="6">
            <div>
              <CircularProgressbar value={value1} maxValue={1} text={`${value1 * 100}%`}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: `rgba(62, 152, 199, ${value1 * 100})`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
                rotation: 0.25,
              })}
             />;
            </div> 
          </Col>
          <Col md="6">
            <div>
              <CircularProgressbar value={value2} maxValue={1} text={`${value2 * 100}%`}
               styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: `rgba(62, 152, 199, ${value2 * 100})`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
                rotation: 0.25,
                width: 200, 
                height: 200
              })}
              />;
            </div> 
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProjectDetails;
