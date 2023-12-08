 // eslint-disable-next-line
import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  //chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
import Api from "./Api";

function Dashboard(props) {
  const {members, feedbacks, deployments, messages, projects,statLogs } = Api();
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [mostConcurrentTopics, setMostConcurrentTopics] = useState([]);
  const [topicMessagesMap, setTopicMessagesMap] = useState({});
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  //extracting member data
  //const memberLabels = members.map((member)=>member.firstname);
  //const memberData = members.map((member) => member.project ? 1000 : 0)
  const membersCountByProject = projects.map((project) => {
    const count = members.filter((member) => member.project === project.id).length;
    return count;
  });

  //extracting project names

  const projectNames = projects.map((project) => project.projectname);

  //generating dynamic data
  useEffect(() => {
    // Extracting topics from statLogs
    const topics = statLogs.map((log) => log.topic);

    // Counting occurrences of each topic
    const topicCounts = topics.reduce((acc, topic) => {
      acc[topic] = (acc[topic] || 0) + 1;
      return acc;
    }, {});

    // Sorting topics by frequency
    const sortedTopics = Object.keys(topicCounts).sort(
      (a, b) => topicCounts[b] - topicCounts[a]
    );

    // Getting the top 5 most concurrent topics
    const topTopics = sortedTopics.slice(0, 5);

    // Creating an array with the topic names and their occurrence count
    const mostConcurrentTopicsData = topTopics.map((topic) => ({
      topic,
      count: topicCounts[topic],
      messages:[],
    }));

    setMostConcurrentTopics(mostConcurrentTopicsData);

    // Creating a map to store message titles for each topic
    const topicMessages = {};

    // Populating the map
    statLogs.forEach((log) => {
      const { topic, messagetitle } = log;
      if (!topicMessages[topic]) {
        topicMessages[topic] = new Set();
      }
      topicMessages[topic].add(messagetitle);
    });

    setTopicMessagesMap(topicMessages);
  }, [statLogs]);

  


  const chartData = {
    labels: projectNames,
    datasets:[
      {
        label: "Per project",
        fill: true,
        backgroundColor: "rgba(29,140,248,0.2)",
        borderColor: "#1f8ef1",
        borderWidth: 2,
        data: membersCountByProject,
      },
    ],
  };
  const chartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 0,
          suggestedMax: 1000,
        },
      }],
    },
    // ... (other options)
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Distribution of</h5>
                    <CardTitle tag="h2">Members</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Projects
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Counties
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Age
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartData}
                    options={chartOptions}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        <div class="col-md-6 col-lg-3">
          <div class="card-stats card">
            <div class="card-body">
              <div class="row">
                <div class="col-5">
                  <div class="info-icon text-center icon-warning">
                  <div class = "custom-icon-container1">
                    <i class="tim-icons icon-chat-33 custom-icon"></i>
                    </div>
                  </div>
                </div>
              <div class="col-7">
                <div class="numbers">
                  <p class="card-category">Topics aired</p>
                  {messages.length > 0? (
                    <h3 className="card-title">{messages.length}</h3>
                  ):(
                    <h3 className="card-title">0</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            
            <div class="stats">
              <i class="tim-icons icon-refresh-01"></i>
               Learn more
            </div>
            
          </div>
        </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card-stats card">
            <div class="card-body">
              <div class="row">
                <div class="col-5">
                  <div class="info-icon text-center icon-primary">
                  <div class = "custom-icon-container2">
                    <i class="tim-icons icon-shape-star custom-icon"></i>
                    </div>
                  </div>
                </div>
                <div class="col-7">
                  <div class="numbers">
                    <p class="card-category">Counties</p>
                    <h3 class="card-title">47</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="tim-icons icon-sound-wave"></i>
                 Counties Reached
              </div>
            </div>
          </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card-stats card">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-success">
                    <div class = "custom-icon-container3">
                      <i class="tim-icons icon-single-02 custom-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Members</p>
                      {members.length > 0? (
                    <h3 className="card-title">{members.length}</h3>
                  ):(
                    <h3 className="card-title">0</h3>
                  )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                
                <div class="stats">
                  <i class="tim-icons icon-trophy"></i>
                   Members registered
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card-stats card">
              <div class="card-body">
                <div class="row">
                  <div class="col-5">
                    <div class="info-icon text-center icon-danger">
                      <div class = "custom-icon-container4">
                      <i class="tim-icons icon-molecule-40 custom-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-7">
                    <div class="numbers">
                      <p class="card-category">Groups</p>
                      <h3 class="card-title">12</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
               
                <div class="stats">
                  <i class="tim-icons icon-watch-time"></i>
                   Online In the last hours
                </div>
              </div>
            </div>
          </div>
        </Row>
        

        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Occupation Distribution</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Project Distribution</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  3,500
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Deployments</h5>
                <CardTitle tag="h3">
                  
                  {deployments.length > 0? (
                  <>
                    <i className="tim-icons icon-send text-success" />
                    {deployments.length}
                  </>
                  ):(
                    <p>0</p>
                  )}
                
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Unread</h6>
                <p className="card-category d-inline"> today</p>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Select all
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Sort by date
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                   
                    <tbody>
                      {feedbacks && feedbacks.length > 0 ?(
                      feedbacks.map((feedback)=>(
                        <tr key={feedback.id}>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">{feedback.message}</p>
                          <p className="text-muted">
                            {feedback.feedBack}
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip636901683"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip636901683"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                     ))):(
                      <tr><td colSpan="4">No Feedbacks found</td></tr>
                     )} 
                    </tbody>
                  
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Common topics listened</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Topic</th>
                      <th>Listened</th>
                      <th>messages contained</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {mostConcurrentTopics.length > 0 ? (
                      mostConcurrentTopics.map((topicData, index) => (
                        <tr key={index}>
                          <td>{topicData.topic}</td>
                          <td>{topicData.count} x</td>
                          <td>
                            {topicMessagesMap[topicData.topic] &&
                              Array.from(topicMessagesMap[topicData.topic]).map(
                                (messageTitle, innerIndex) => (
                                  <div key={innerIndex}>{messageTitle}</div>
                                )
                              )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3">No Topics found</td>
                      </tr>
                    )}
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

export default Dashboard;
