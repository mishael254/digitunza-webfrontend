import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardHeader, CardBody, Table, Row, Col, CardTitle } from "reactstrap";

function ProjectDetails() {
  const { projectName } = useParams();
  const [projectDetails, setProjectDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/getStatLog`)
      .then((response) => {
        // Filter the data to include all rows with the matching project name
        const selectedProjects = response.data.filter((project) => project.project === projectName);
        
        setProjectDetails(selectedProjects);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
      });
  }, [projectName]);

  if (projectDetails.length === 0) {
    return <div className="content">
      <Row>
      <Col md="6" >
        <Card>
          <CardHeader>
          <div>No project details available for {projectName}</div>
          </CardHeader>
        </Card>
      </Col>
    </Row>
    </div>;
    
    
  }

  const headers = Object.keys(projectDetails[0]);

  return (
    <>
    <div className="content">
      <div className="react-notification-alert-container">
        
      </div>
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
