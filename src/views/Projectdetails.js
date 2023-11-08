import React from "react";
import { useParams, Link } from "react-router-dom";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col,Button } from "reactstrap";

function Projectdetails() {
  const {id} = useParams();
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">Black Table Heading 1 </h5>
                <CardTitle tag="h3">
                  Project details for {id}
                </CardTitle>
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
          </Col>
          <Col md="5">
          <Card>
              <CardHeader className="mb-5">
                
                <h5 className="card-category">Black Table Heading 2</h5>
                <CardTitle tag="h3">
                  Total users in Project.. {id}
                </CardTitle>
                
                
              </CardHeader>
              <CardBody>
                
                
              </CardBody>
            </Card>
          </Col>
            <Col md="6">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">Black Table Heading 3</h5>
                <CardTitle tag="h3">
                  No of groups in Project.. {id}
                </CardTitle>
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
            </Col>
            
            <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">Black Table Heading 4</h5>
                <CardTitle tag="h3">
                 No of Playlist deployed for project {id}
                </CardTitle>
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
            </Col>
            
            <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">Black Table Heading 5</h5>
                <CardTitle tag="h3">
                  Time duration for Project {id}
                </CardTitle>
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
            </Col>
          
            <Col md="4">
            <Link to="/admin/projects"><Button block color="primary">Go back</Button></Link>
            </Col>   
        </Row>
      </div>
    </>
  );
}

export default Projectdetails ;
