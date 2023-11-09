
import React, {useState}from "react";
import { DatePicker } from "antd";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Createproject() {
  
  const currTime = new Date().toLocaleTimeString();
  const [date, setDate] = useState(new Date());
  function onChange(date, dateString) {
    setDate(date);
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Create Project</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <div class="col-md-12">
                    <form id="RangeValidation" class="form-horizontal">
                      <div class="card">
                        <div class="card-header">
                          <h4 class="card-title">Project Build form</h4>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <label class="col-sm-2 col-form-label">Project Name</label>
                            <div class="col-sm-7">
                              <div class="form-group">
                                <input name="min_length" type="text" class="form-control"></input>
                              </div>
                            </div>
                            <label class="label-on-right col-sm-3"><code>minLength="5"</code></label>
                          </div>
                          <div class="row">
                            <label class="col-sm-2 col-form-label">Category</label>
                            <div class="col-sm-7">
                              <div class="form-group">
                                <input name="max_length" type="text" class="form-control"></input>
                              </div>
                            </div>
                            <label class="label-on-right col-sm-3"><code>maxLength="5"</code></label>
                          </div>
                          <div class="row">
                            <label class="col-sm-2 col-form-label">Country</label>
                            <div class="col-sm-7">
                              <div class="form-group">
                                <input name="range" type="text" class="form-control"></input>
                              </div>
                            </div>
                            <label class="label-on-right col-sm-3"><code>min="6" max="10"</code></label>
                          </div>
                          <div class="row">
                            <label class="col-sm-2 col-form-label">County</label>
                            <div class="col-sm-7">
                              <div class="form-group">
                                <input name="min" type="text" class="form-control"></input>
                              </div>
                            </div>
                            <label class="label-on-right col-sm-3"><code>min="6"</code></label>
                          </div>
                          <div class="row">
                            <label class="col-sm-2 col-form-label">County zone</label>
                            <div class="col-sm-7">
                              <div class="form-group">
                                <input name="max" type="text" class="form-control"></input>
                              </div>
                            </div>
                            <label class="label-on-right col-sm-3"><code>max="6"</code></label>
                          </div>
                          
                          <div class="row">
                            <div class="col-md-4">
                              <div class="card">
                                <div class="card-header">
                                  <h4 class="card-title">Start date</h4>
                                </div>
                                <div class="card-body">
                                  <div class="form-group">
                                    <div class="rdt">
                                      
                                        <div class="rdtPicker">
                                          <div class="rdtDays">
                                            <table>
                                              <DatePicker class="form-control" onChange={onChange} />
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="card">
                                  <div class="card-header">
                                    <h4 class="card-title">End date</h4>
                                  </div>
                                  <div class="card-body">
                                    <div class="form-group">
                                      <div class="rdt">
                                      
                                          <div class="rdtPicker">
                                            <div class="rdtDays">
                                              <table>
                                              <DatePicker class="form-control" onChange={onChange} />
                                              </table>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <div class="card">
                                    <div class="card-header">
                                      <h4 class="card-title">Time Picker</h4>
                                    </div>
                                    <div class="card-body">
                                      <div class="form-group">
                                        <div class="rdt">
                                          <input type="text" class="form-control" placeholder="Time Picker Here" value={currTime}></input>
                                            <div class="rdtPicker">
                                              <div class="rdtTime">
                                                <table>
                                                  
                                                </table>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                        </div>
                        
                        <div class="text-center card-footer">
                          <button type="button" class="btn btn-primary">Validate Inputs</button>
                        </div>
                      </div>
                    </form>
                  </div>
              
                </Table>
                <Table>
                  <div class="col-md-12">
                    <form id="TypeValidation" class="form-horizontal">
                      <div class="card">
                        <div class="card-header">
                          <h4 class="card-title">Type Validation</h4>
                        </div>
                      <div class="card-body">
                      <div class="row">
                        <label class="col-sm-2 col-form-label">Required Text</label>
                        <div class="col-sm-7">
                          <div class="form-group">
                            <input name="required" type="text" class="form-control"></input>
                          </div>
                        </div>
                        <label class="label-on-right col-sm-3"><code>required</code></label>
                      </div>
                      <div class="row">
                        <label class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-7">
                          <div class="form-group">
                            <input name="email" type="text" class="form-control"></input>
                          </div>
                        </div>
                        <label class="label-on-right col-sm-3"><code>type="email"</code></label>
                      </div>
                      <div class="row">
                        <label class="col-sm-2 col-form-label">Number</label>
                        <div class="col-sm-7">
                          <div class="form-group">
                            <input name="number" type="text" class="form-control"></input>
                          </div>
                        </div>
                        <label class="label-on-right col-sm-3"><code>type="number"</code></label>
                      </div>
                      <div class="row">
                        <label class="col-sm-2 col-form-label">Url</label>
                        <div class="col-sm-7">
                          <div class="form-group">
                            <input name="url" type="text" class="form-control"></input>
                          </div>
                        </div>
                        <label class="label-on-right col-sm-3"><code>type="url"</code></label>
                      </div>
                      <div class="row">
                        <label class="col-sm-2 col-form-label">Equal to</label>
                        <div class="col-sm-3">
                          <div class="form-group">
                            <input id="idSource" placeholder="#idSource" type="text" class="form-control"></input>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="form-group">
                            <input id="idDestination" placeholder="#idDestination" type="text" class="form-control"></input>
                          </div>
                        </div>
                        <label class="label-on-right col-sm-4"><code>equalTo="#idSource"</code></label>
                      </div>
                    </div>
                    <div class="text-center card-footer">
                      <button type="button" class="btn btn-primary">Validate Inputs</button>
                    </div>
                  </div>
                </form>
              </div>
              </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Playlists uploaded</CardTitle>
                <p className="category">Videos , audio, Thumbnail</p>
              </CardHeader>
              <CardBody>
              <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Thumbnail</th>
                      <th>mp3/mp4</th>
                      <th className="text-center">Time Uploaded</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-center"></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-center"></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-center"></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-center"></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-center"></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-center"></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-center"></td>
                    </tr>
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

export default Createproject;
