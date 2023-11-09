
import React from "react";
import { Link } from "react-router-dom"
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";

//defining a function to handle click on the card

function Projects() {
  return (
    <>
      <div className="content">
      <Row className="justify-content-end">

        <Col md="4" className="d-flex justify-content-end">
                    <Link to="/admin/projects"><Button block color="primary">+ Create Project</Button></Link>
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
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6 clickable-card"
                    lg="2"
                    md="3"
                    sm="4"
                    
                    
                  >
                    <Link to={'/admin/projects-details'}>
                      <div className="font-icon-detail">
                        <i className="tim-icons icon-alert-circle-exc" />
                        <p></p>
                      </div>
                    </Link>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6 clickable-card"
                    lg="2"
                    md="3"
                    sm="4"
                    
                  >
                    
                    <Link to={'/admin/projects-details'}><div className="font-icon-detail">
                      <i className="tim-icons icon-alert-circle-exc" />
                      <p></p>
                    </div>
                    </Link>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6 clickable-card"
                    lg="2"
                    md="3"
                    sm="4"
                    
                  >
                    
                    <Link to={'/admin/projects-details'}><div className="font-icon-detail">
                      <i className="tim-icons icon-alert-circle-exc" />
                      <p></p>
                    </div>
                    </Link>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6 clickable-card"
                    lg="2"
                    md="3"
                    sm="4"
                    
                  >
                    
                    <Link to={'/admin/projects-details'}><div className="font-icon-detail">
                      <i className="tim-icons icon-alert-circle-exc" />
                      <p></p>
                    </div>
                    </Link>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6 clickable-card"
                    lg="2"
                    md="3"
                    sm="4"
                    
                  >
                    
                    <Link to={'/admin/projects-details'}><div className="font-icon-detail">
                      <i className="tim-icons icon-alert-circle-exc" />
                      <p></p>
                    </div>
                    </Link>
                  </Col>
                  <Col
                    className="font-icon-list col-xs-6 col-xs-6 clickable-card"
                    lg="2"
                    md="3"
                    sm="4"
                    
                  >
                    
                    <Link to={'/admin/projects-details'}><div className="font-icon-detail">
                      <i className="tim-icons icon-alert-circle-exc" />
                      <p></p>
                    </div>
                    </Link>
                  </Col>
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
