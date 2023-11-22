import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardHeader, CardBody, Table,  } from "reactstrap";

function ProjectDetails() {
  const { projectName } = useParams();
  const [projectDetails, setProjectDetails] = useState([]);

  useEffect(() => {
    // Make an API request to get details for the specific project
    axios
      .get(`http://tathmini.live:8000/api/statlog/?project=${projectName}`)
      .then((response) => setProjectDetails(response.data))
      .catch((error) => {
        console.error("Error fetching project details:", error);
        setProjectDetails([]);
      });
  }, [projectName]);

  if (projectDetails.length === 0) {
    return <div>No project details available for {projectName}</div>;
  }

  return (
    <div>
      <h1>{projectName}</h1>
      <Card className="card-tasks">
        <CardHeader>
          <h6 className="title d-inline">Tasks({projectDetails.length})</h6>
          <p className="card-category d-inline">today</p>
        </CardHeader>
        <CardBody>
          <Table>
            <tbody>
              {projectDetails.map((project) => (
                <tr key={project.id}>
                  <td>
                    
                  </td>
                  <td>
                    <p className="title">{project.project}</p>
                    <p className="text-muted">{/* Render other fields here */}</p>
                  </td>
                  <td className="td-actions text-right">
                    <button type="button" className="btn btn-link">
                      <i className="tim-icons icon-pencil"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProjectDetails;
