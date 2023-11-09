
import React from "react";

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
                                  <h4 class="card-title">Date-Time-Picker</h4>
                                </div>
                                <div class="card-body">
                                  <div class="form-group">
                                    <div class="rdt">
                                      <input type="text" class="form-control" placeholder="Datetime Picker Here" value=""></input>
                                        <div class="rdtPicker">
                                          <div class="rdtDays">
                                            <table>
                                              <thead>
                                                <tr>
                                                  <th class="rdtPrev"><span>‹</span></th>
                                                  <th class="rdtSwitch" colspan="5" data-value="8">September 2023</th>
                                                  <th class="rdtNext"><span>›</span></th>
                                                </tr>
                                                <tr>
                                                  <th class="dow">Su</th>
                                                  <th class="dow">Mo</th>
                                                  <th class="dow">Tu</th>
                                                  <th class="dow">We</th>
                                                  <th class="dow">Th</th>
                                                  <th class="dow">Fr</th>
                                                  <th class="dow">Sa</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td data-value="27" data-month="7" data-year="2023" class="rdtDay rdtOld">27</td>
                                                  <td data-value="28" data-month="7" data-year="2023" class="rdtDay rdtOld">28</td>
                                                  <td data-value="29" data-month="7" data-year="2023" class="rdtDay rdtOld">29</td>
                                                  <td data-value="30" data-month="7" data-year="2023" class="rdtDay rdtOld">30</td>
                                                  <td data-value="31" data-month="7" data-year="2023" class="rdtDay rdtOld">31</td>
                                                  <td data-value="1" data-month="8" data-year="2023" class="rdtDay">1</td>
                                                  <td data-value="2" data-month="8" data-year="2023" class="rdtDay">2</td>
                                                </tr>
                                                <tr>
                                                  <td data-value="3" data-month="8" data-year="2023" class="rdtDay">3</td>
                                                  <td data-value="4" data-month="8" data-year="2023" class="rdtDay">4</td>
                                                  <td data-value="5" data-month="8" data-year="2023" class="rdtDay">5</td>
                                                  <td data-value="6" data-month="8" data-year="2023" class="rdtDay">6</td>
                                                  <td data-value="7" data-month="8" data-year="2023" class="rdtDay">7</td>
                                                  <td data-value="8" data-month="8" data-year="2023" class="rdtDay">8</td>
                                                  <td data-value="9" data-month="8" data-year="2023" class="rdtDay">9</td>
                                                </tr>
                                                <tr>
                                                  <td data-value="10" data-month="8" data-year="2023" class="rdtDay">10</td>
                                                  <td data-value="11" data-month="8" data-year="2023" class="rdtDay">11</td>
                                                  <td data-value="12" data-month="8" data-year="2023" class="rdtDay">12</td>
                                                  <td data-value="13" data-month="8" data-year="2023" class="rdtDay">13</td>
                                                  <td data-value="14" data-month="8" data-year="2023" class="rdtDay">14</td>
                                                  <td data-value="15" data-month="8" data-year="2023" class="rdtDay">15</td>
                                                  <td data-value="16" data-month="8" data-year="2023" class="rdtDay">16</td>
                                                </tr>
                                                <tr>
                                                  <td data-value="17" data-month="8" data-year="2023" class="rdtDay">17</td>
                                                  <td data-value="18" data-month="8" data-year="2023" class="rdtDay">18</td>
                                                  <td data-value="19" data-month="8" data-year="2023" class="rdtDay">19</td>
                                                  <td data-value="20" data-month="8" data-year="2023" class="rdtDay">20</td>
                                                  <td data-value="21" data-month="8" data-year="2023" class="rdtDay">21</td>
                                                  <td data-value="22" data-month="8" data-year="2023" class="rdtDay">22</td>
                                                  <td data-value="23" data-month="8" data-year="2023" class="rdtDay">23</td>
                                                </tr>
                                                <tr>
                                                  <td data-value="24" data-month="8" data-year="2023" class="rdtDay">24</td>
                                                  <td data-value="25" data-month="8" data-year="2023" class="rdtDay">25</td>
                                                  <td data-value="26" data-month="8" data-year="2023" class="rdtDay">26</td>
                                                  <td data-value="27" data-month="8" data-year="2023" class="rdtDay">27</td>
                                                  <td data-value="28" data-month="8" data-year="2023" class="rdtDay">28</td>
                                                  <td data-value="29" data-month="8" data-year="2023" class="rdtDay">29</td>
                                                  <td data-value="30" data-month="8" data-year="2023" class="rdtDay">30</td>
                                                </tr>
                                                <tr>
                                                  <td data-value="1" data-month="9" data-year="2023" class="rdtDay rdtNew">1</td>
                                                  <td data-value="2" data-month="9" data-year="2023" class="rdtDay rdtNew">2</td>
                                                  <td data-value="3" data-month="9" data-year="2023" class="rdtDay rdtNew">3</td>
                                                  <td data-value="4" data-month="9" data-year="2023" class="rdtDay rdtNew">4</td>
                                                  <td data-value="5" data-month="9" data-year="2023" class="rdtDay rdtNew">5</td>
                                                  <td data-value="6" data-month="9" data-year="2023" class="rdtDay rdtNew">6</td>
                                                  <td data-value="7" data-month="9" data-year="2023" class="rdtDay rdtNew">7</td>
                                                </tr>
                                              </tbody>
                                              <tfoot>
                                                <tr>
                                                  <td colspan="7" class="rdtTimeToggle">12:00 AM</td>
                                                </tr>
                                              </tfoot>
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
                                    <h4 class="card-title">Date Picker</h4>
                                  </div>
                                  <div class="card-body">
                                    <div class="form-group">
                                      <div class="rdt">
                                        <input type="text" class="form-control" placeholder="Date Picker Here" value=""></input>
                                          <div class="rdtPicker">
                                            <div class="rdtDays">
                                              <table>
                                                <thead>
                                                  <tr>
                                                    <th class="rdtPrev"><span>‹</span></th>
                                                    <th class="rdtSwitch" colspan="5" data-value="10">November 2023</th>
                                                    <th class="rdtNext"><span>›</span></th>
                                                  </tr>
                                                  <tr>
                                                    <th class="dow">Su</th>
                                                    <th class="dow">Mo</th>
                                                    <th class="dow">Tu</th>
                                                    <th class="dow">We</th>
                                                    <th class="dow">Th</th>
                                                    <th class="dow">Fr</th>
                                                    <th class="dow">Sa</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td data-value="29" data-month="9" data-year="2023" class="rdtDay rdtOld">29</td>
                                                    <td data-value="30" data-month="9" data-year="2023" class="rdtDay rdtOld">30</td>
                                                    <td data-value="31" data-month="9" data-year="2023" class="rdtDay rdtOld">31</td>
                                                    <td data-value="1" data-month="10" data-year="2023" class="rdtDay">1</td>
                                                    <td data-value="2" data-month="10" data-year="2023" class="rdtDay">2</td>
                                                    <td data-value="3" data-month="10" data-year="2023" class="rdtDay">3</td>
                                                    <td data-value="4" data-month="10" data-year="2023" class="rdtDay">4</td>
                                                  </tr>
                                                  <tr>
                                                    <td data-value="5" data-month="10" data-year="2023" class="rdtDay">5</td>
                                                    <td data-value="6" data-month="10" data-year="2023" class="rdtDay">6</td>
                                                    <td data-value="7" data-month="10" data-year="2023" class="rdtDay">7</td>
                                                    <td data-value="8" data-month="10" data-year="2023" class="rdtDay">8</td>
                                                    <td data-value="9" data-month="10" data-year="2023" class="rdtDay rdtToday">9</td>
                                                    <td data-value="10" data-month="10" data-year="2023" class="rdtDay">10</td>
                                                    <td data-value="11" data-month="10" data-year="2023" class="rdtDay">11</td>
                                                  </tr>
                                                  <tr>
                                                    <td data-value="12" data-month="10" data-year="2023" class="rdtDay">12</td>
                                                    <td data-value="13" data-month="10" data-year="2023" class="rdtDay">13</td>
                                                    <td data-value="14" data-month="10" data-year="2023" class="rdtDay">14</td>
                                                    <td data-value="15" data-month="10" data-year="2023" class="rdtDay">15</td>
                                                    <td data-value="16" data-month="10" data-year="2023" class="rdtDay">16</td>
                                                    <td data-value="17" data-month="10" data-year="2023" class="rdtDay">17</td>
                                                    <td data-value="18" data-month="10" data-year="2023" class="rdtDay">18</td>
                                                  </tr>
                                                  <tr>
                                                    <td data-value="19" data-month="10" data-year="2023" class="rdtDay">19</td>
                                                    <td data-value="20" data-month="10" data-year="2023" class="rdtDay">20</td>
                                                    <td data-value="21" data-month="10" data-year="2023" class="rdtDay">21</td>
                                                    <td data-value="22" data-month="10" data-year="2023" class="rdtDay">22</td>
                                                    <td data-value="23" data-month="10" data-year="2023" class="rdtDay">23</td>
                                                    <td data-value="24" data-month="10" data-year="2023" class="rdtDay">24</td>
                                                    <td data-value="25" data-month="10" data-year="2023" class="rdtDay">25</td>
                                                  </tr>
                                                  <tr>
                                                    <td data-value="26" data-month="10" data-year="2023" class="rdtDay">26</td>
                                                    <td data-value="27" data-month="10" data-year="2023" class="rdtDay">27</td>
                                                    <td data-value="28" data-month="10" data-year="2023" class="rdtDay">28</td>
                                                    <td data-value="29" data-month="10" data-year="2023" class="rdtDay">29</td>
                                                    <td data-value="30" data-month="10" data-year="2023" class="rdtDay">30</td>
                                                    <td data-value="1" data-month="11" data-year="2023" class="rdtDay rdtNew">1</td>
                                                    <td data-value="2" data-month="11" data-year="2023" class="rdtDay rdtNew">2</td>
                                                  </tr>
                                                  <tr>
                                                    <td data-value="3" data-month="11" data-year="2023" class="rdtDay rdtNew">3</td>
                                                    <td data-value="4" data-month="11" data-year="2023" class="rdtDay rdtNew">4</td>
                                                    <td data-value="5" data-month="11" data-year="2023" class="rdtDay rdtNew">5</td>
                                                    <td data-value="6" data-month="11" data-year="2023" class="rdtDay rdtNew">6</td>
                                                    <td data-value="7" data-month="11" data-year="2023" class="rdtDay rdtNew">7</td>
                                                    <td data-value="8" data-month="11" data-year="2023" class="rdtDay rdtNew">8</td>
                                                    <td data-value="9" data-month="11" data-year="2023" class="rdtDay rdtNew">9</td>
                                                  </tr>
                                                </tbody>
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
                                          <input type="text" class="form-control" placeholder="Time Picker Here" value=""></input>
                                            <div class="rdtPicker">
                                              <div class="rdtTime">
                                                <table>
                                                  <tbody>
                                                    <tr>
                                                      <td>
                                                        <div class="rdtCounters">
                                                          <div class="rdtCounter">
                                                            <span class="rdtBtn">▲</span>
                                                            <div class="rdtCount">12</div>
                                                            <span class="rdtBtn">▼</span>
                                                          </div>
                                                          <div class="rdtCounterSeparator">:</div>
                                                          <div class="rdtCounter">
                                                            <span class="rdtBtn">▲</span>
                                                            <div class="rdtCount">00</div>
                                                            <span class="rdtBtn">▼</span>
                                                          </div>
                                                          <div class="rdtCounter">
                                                            <span class="rdtBtn">▲</span>
                                                            <div class="rdtCount">AM</div>
                                                            <span class="rdtBtn">▼</span>
                                                          </div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
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
