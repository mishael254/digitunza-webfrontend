 // eslint-disable-next-line
import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
//import { Line } from "react-chartjs-2";
// skeleton loading screen
import Skeleton from "react-loading-skeleton";
//import { useSelector } from 'react-redux';
import OccupationLineGraph from "../variables/Occupation";
import DeploymentLineGraph from "variables/DeploymentsGraph";
import MembersProjectsGraph from "variables/MembersProjectGraph";
import MembersAgeGraph from "variables/MembersAgeGraph";
import MembersCountiesGraph from "variables/MembersCountiesGraph";
import KenyaMap from '@svg-maps/kenya';
import { SVGMap } from "react-svg-map";
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
  //chartExample2,
  //chartExample3,
  //chartExample4,
} from "variables/charts.js";
import Api from "./Api";
import ZoneBarGraph from "variables/ZoneBarGraph";
import { object } from "prop-types";

function Dashboard(props) {
  
  const {members, feedbacks, deployments, messages, projects,statLogs, isLoading } = Api();
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [mostConcurrentTopics, setMostConcurrentTopics] = useState([]);
  const [topicMessagesMap, setTopicMessagesMap] = useState({});
  const [uniqueCounties, setUniqueCounties] = useState(0);
  const [uniqueGroups,setUniqueGroups] = useState(0);
  const [uniqueOccupations, setUniqueOccupations] = useState(0);
  const [uniqueOccupationInMembers,setUniqueOccupationInMembers] = useState(0);
  const [uniqueProjects,setUniqueProjects] = useState(0);
  const [activeChart, setActiveChart] = React.useState("projects");
  const [topicProgress, setTopicProgress] = useState([]);
  const [uniqueCountiesCount, setUniqueCountiesCount] = useState(0); // Initialize to 0
  const setBgChartData = (name) => {
    setbigChartData(name);
 };
  
 

  //conditionally assigning the selected component based on the button clicked
 const handleButtonClick = (chartType) => {
  setActiveChart(chartType);
 };
 //Defining a variable to hold the selected Graph component
 let SelectedGraph;
 if (activeChart === "projects") {
   SelectedGraph = <MembersProjectsGraph/>
 }else if (activeChart === "counties") {
   SelectedGraph = <MembersCountiesGraph/>
 }else if (activeChart === "age") {
   SelectedGraph = <MembersAgeGraph/>
 }
  //generating dynamic data
  useEffect(() => {
    //extracting projects from statlogs
    const projectNames = statLogs.map((log) =>log.project);
    //filter blank field project in every object
    const noEmptyProjects = projectNames.filter((project) => project);
    //tokenize and normalize project names
    const normalizedProjects = noEmptyProjects.map((project) =>
    project.toLowerCase().split(/\s+/).join(" ")
    );
    // use a Set to get unique project names
    const uniqueProjectsSet = new Set(normalizedProjects);
    //update the state with the unique project count
    setUniqueProjects(uniqueProjectsSet.size);


    //extracting occupations from members

    
    const memberOccupationNames = members.map ((member) => member.occupation);
    //filter blank field occupations in member objects
    const noEmptyMemberOccupations = memberOccupationNames.filter((occupation) => occupation);
    //tokenize and normalize occupation names
    const normalizedMemberOccupations = noEmptyMemberOccupations.map((occupation) =>
    occupation.toLowerCase().split(/\s+/).join(" ")
    );
    //use a Set to get Unique Occupation Names
    const uniquemembersOccupationsSet = new Set(normalizedMemberOccupations);
    //update state with the unique occupation count
    setUniqueOccupationInMembers(uniquemembersOccupationsSet.size);
    // Calculate occupation counts
   
    

    //extracting occupations from statlogs
    const occupationNames = statLogs.map ((log) => log.occupation);
    //filter blank field occupations in objects
    const noEmptyOccupations = occupationNames.filter((occupation) => occupation);
    //tokenize and normalize occupation names
    const normalizedOccupations = noEmptyOccupations.map((occupation) =>
    occupation.toLowerCase().split(/\s+/).join(" ")
    );
    //use a Set to get Unique occupation names
    const uniqueOccupationsSet = new Set(normalizedOccupations);
    //update state with the unique occupation count
    setUniqueOccupations(uniqueOccupationsSet.size);

    //extracting groups from statlogs
    const groupNames = statLogs.map((log) => log.group);
    //filter out any empty group fields or groups that have no names 
    const noEmptyGroups = groupNames.filter((group) => group);
    //tokenize and normalize group names
    const normalizedGroups = noEmptyGroups.map((group) =>
    group.toLowerCase().split(/\s+/).join(" ")
    );
    //use a Set to get unique group names
    const uniqueGroupSet = new Set(normalizedGroups);
    //update state with the unique group count
    setUniqueGroups(uniqueGroupSet.size);
   
    //extracting counties from statlogs
    const countyNames = statLogs.map((log) => log.county);
    //filter out any county field that are empty or have been left out blank
    const noEmptyCounties = countyNames.filter((county) => county);
    //tokenize and normalize county names
    const normalizedCounties = noEmptyCounties.map((county) =>
    county.toLowerCase().split(/\s+/).join(" ")
    );
    // Use a Set to get unique county names
    const uniqueCountySet = new Set(normalizedCounties);
    // Update state with the unique county count

    setUniqueCounties(uniqueCountySet.size);

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

    const uniqueCounties = new Set(statLogs.map((log) => log.presentcounty));
    setUniqueCountiesCount(uniqueCounties.size);
//calculating the progress so as to display it in the progress bar 
//this time i am using to show progress of the topics appearing in counties {presentCounties}
const progressGroupedByTopic = statLogs.reduce((acc, log) => {
  if (!acc[log.topic]) {
    acc[log.topic] = [];
  }
  acc[log.topic].push(log);
  return acc;
}, {});

// now calculate progress for each topic
const progressData = Object.keys(progressGroupedByTopic).map((topic) => {
  const logsForTopic = progressGroupedByTopic[topic];
  const nonNullCounties = logsForTopic.filter((log) => log.presentcounty !== null);
  const uniqueCounties = new Set(nonNullCounties.map((log) => log.presentcounty));
  const progress = (uniqueCounties.size / uniqueCountiesCount) * 100;
  return { topic, progress };
});

setTopicProgress(progressData);

    
  }, [members, statLogs, uniqueCountiesCount]);
  // Calculate occupation counts
 
 
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
                          active: activeChart === "projects",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => handleButtonClick("projects")}
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
                          active: activeChart === "counties",
                        })}
                        onClick={() => handleButtonClick("counties")}
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
                          active: activeChart === "age",
                        })}
                        onClick={() => handleButtonClick("age")}
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
                 <div >{SelectedGraph}</div>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        <div className="col-md-6 col-lg-3">
          <div className="card-stats card">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="info-icon text-center icon-warning">
                  <div className = "custom-icon-container1">
                    <i className="tim-icons icon-chat-33 custom-icon"></i>
                    </div>
                  </div>
                </div>
              <div className="col-7">
                {isLoading?(<Skeleton height={200} count={5} />):(
                  <div className="numbers">
                  <p className="card-category">Topics aired</p>
                  {messages.length > 0? (
                    <h3 className="card-title">{messages.length}</h3>
                  ):(
                    <h3 className="card-title">0</h3>
                  )}
                </div>
                )}
                
              </div>
            </div>
          </div>
          <div className="card-footer">
            
            <div className="stats">
              <i className="tim-icons icon-refresh-01"></i>
               Learn more
            </div>
            
          </div>
        </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card-stats card">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="info-icon text-center icon-primary">
                  <div className = "custom-icon-container2">
                    <i className="tim-icons icon-shape-star custom-icon"></i>
                    </div>
                  </div>
                </div>
                <div className="col-7">
                  {isLoading? (<Skeleton height={200} count={5} />):(
                    <div className="numbers">
                    <p className="card-category">Counties</p>
                    <h3 className="card-title">{uniqueCounties}</h3>
                  </div>
                  )}
                  
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="tim-icons icon-sound-wave"></i>
                 Counties Reached
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card-stats card">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="info-icon text-center icon-success">
                    <div className= "custom-icon-container3">
                      <i className="tim-icons icon-single-02 custom-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    {isLoading ? (<Skeleton height={200} count={5} />):(
                      <div className="numbers">
                      <p className="card-category">Members</p>
                      {members.length > 0? (
                    <h3 className="card-title">{members.length}</h3>
                  ):(
                    <h3 className="card-title">0</h3>
                  )}
                    </div>
                    )}
                    
                  </div>
                </div>
              </div>
              <div className="card-footer">
                
                <div className="stats">
                  <i className="tim-icons icon-trophy"></i>
                   Members registered
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card-stats card">
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <div className="info-icon text-center icon-danger">
                      <div className= "custom-icon-container4">
                      <i className="tim-icons icon-molecule-40 custom-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    {isLoading? (<Skeleton height={200} count={5} />):(
                      <div className="numbers">
                      <p className="card-category">Groups</p>
                      <h3 className="card-title">{uniqueGroups}</h3>
                    </div>
                    )}
                    
                  </div>
                </div>
              </div>
              <div className="card-footer">
               
                <div className="stats">
                  <i className="tim-icons icon-watch-time"></i>
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
                  <i className="tim-icons icon-bell-55 text-info" />{uniqueOccupationInMembers}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                <OccupationLineGraph members={members} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Project Distribution</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{uniqueProjects}
                  
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                  <ZoneBarGraph projects={projects}/>
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
                <div>
                  <DeploymentLineGraph deployments={deployments}/>
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
                      <th>Progress</th>
                      <th>actions</th>
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
                          <td>
                            {topicProgress.map((progressData, progressIndex) => {
                              if (progressData.topic === topicData.topic) {
                                return (
                                  <div
                                    key={progressIndex}
                                    className="progress-container progress-sm"
                                  >
                                    <div className="progress">
                                      <span className="progress-value">{`${progressData.progress.toFixed(
                                        2
                                      )}%`}</span>
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progressData.progress}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progressData.progress}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </td>
                          <td>
                            <button
                              type="button"
                              id={`tooltipRefresh_${index}`}
                              title="Refresh"
                              className="btn-link btn-icon btn btn-success btn-sm"
                            >
                              <i className="tim-icons icon-refresh-01"></i>
                            </button>
                            <button
                              type="button"
                              id={`tooltipDelete_${index}`}
                              title="Delete"
                              className="btn-link btn-icon btn btn-danger btn-sm"
                            >
                              <i className="tim-icons icon-simple-remove"></i>
                            </button>
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
{/**div to experiment on maps and svgs */}
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Top counties with projects running</h4>
                <p class="card-category">Currently online counties</p>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="table-responsive ps">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>
                              <div class="flag">
                                <img alt="..." src=""/>
                              </div>
                            </td>
                            <td>Nandi County</td>
                            <td class="text-right">2.920</td>
                            <td class="text-right">53.23%</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="flag">
                                <img alt="..." src=""/>
                              </div>
                            </td>
                            <td>Nyeri county</td>
                            <td class="text-right">1.300</td>
                            <td class="text-right">20.43%</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="flag">
                                <img alt="..." src=""/>
                              </div>
                            </td>
                            <td>Murang'a county</td>
                            <td class="text-right">760</td>
                            <td class="text-right">10.35%</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="flag">
                                <img alt="..." src=""/>
                              </div>
                            </td>
                            <td>Migori county</td>
                            <td class="text-right">690</td>
                            <td class="text-right">7.87%</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="flag">
                                <img alt="..." src=""/>
                              </div>
                            </td>
                            <td>Mombasa county</td>
                            <td class="text-right">600</td>
                            <td class="text-right">5.94%</td>
                          </tr>
                          <tr>
                            <td>
                              <div class="flag">
                                <img alt="..." src=""/>
                              </div>
                            </td>
                            <td>Meru county</td>
                            <td class="text-right">550</td>
                            <td class="text-right">4.34%</td>
                          </tr>
                        </tbody>
                      </table>
                        <div class="ps__rail-x" style={{left: "0px; bottom: 0px;"}}>
                          <div class="ps__thumb-x" tabindex="0" style={{left: "0px; width: 0px;"}}></div>
                        </div>
                        <div class="ps__rail-y" style={{top: "0px; right: 0px;"}}>
                          <div class="ps__thumb-y" tabindex="0" style={{top: "0px; height: 0px;"}}></div>
                        </div>
                        </div>
                        </div>
                        <div class="ml-auto mr-auto col-md-6">
                          <div style={{width: "100%; height: 300px;"}}>
                            <div class="jvectormap-container" style={{backgroundColor: "transparent;"}}>
                              
                              <SVGMap map={KenyaMap} />
                              
                              <div class="jvectormap-zoomin">+</div>
                              <div class="jvectormap-zoomout">−</div>
                              <div class="jvectormap-legend-cnt jvectormap-legend-cnt-h">
                              </div>
                              <div class="jvectormap-legend-cnt jvectormap-legend-cnt-v">
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
