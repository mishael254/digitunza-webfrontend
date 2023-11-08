import React from "react";
import { useParams } from "react-router-dom";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Projectdetails() {
  const {id} = useParams();
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">Black Table Heading</h5>
                <CardTitle tag="h3">
                  Projectdetails for Project {id}
                </CardTitle>
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Projectdetails ;
