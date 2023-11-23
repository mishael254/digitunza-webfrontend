
import React, {useState, useRef}from "react";
import { DatePicker } from "antd";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  
} from "reactstrap";

function Createproject() {
  const [formData, setFormData] = useState({
    projectName:'',
    category:'',
    country:'',
    county:'',
    countyZone:'',
    groupName:'',
    groupNumber:'',
    messageTitle:'',
    messageTopic:'',
    messageSubtopic:'',
    messageDuration:'',
    startDate:'',
    endDate:'',
    time:'',
  });
  const handleFormChange = (e) => {
    const {name,value} = e.target;
    setFormData((prevData)=>({
      [name]:value,
    }));
  };
  const handleFormSubmit = ()=>{
    fetch('your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the API response if needed
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }
  const [imageFile, setImageFile] = useState(null);
  const[audioFile, setAudioFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const audioInputRef = useRef(null);

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    setFile(file);
  }
  const handleAddPhotoClick = (inputRef)=>{
   inputRef.current.click();
  }
  const handleDeleteClick = (setFile) =>{
    setFile(null);
  }
  
  
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
                <Table>
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
                            <label class="col-sm-2 col-form-label">Group name</label>
                            <div class="col-sm-7">
                              <div class="form-group">
                                <input name="max" type="text" class="form-control"></input>
                              </div>
                            </div>
                            <label class="label-on-right col-sm-3"><code>max="6"</code></label>
                          </div>
                          <div class="row">
                          <label class="col-sm-2 col-form-label">Group number</label>
                          <div class="col-md-7">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="tim-icons icon-mobile"></i>
                                </span>
                              </div>
                              <input name="number" placeholder="Group no..." type="number" class="form-control"></input>
                            </div>
                          </div>
                        </div>
                               
                        </div>
                        
                    
                      </div>
                      <Table>
                            <div class="col-md-12">
                                
                              <div class="card">
                                <div class="card-header">
                                  <h4 class="card-title">Playlist upload</h4>
                                </div>
                                <div class="card-body">
                                <div class="row">
                                  <label class="col-sm-2 col-form-label">Message title</label>
                                    <div class="col-sm-7">
                                      <div class="form-group">
                                        <input name="required" type="text" class="form-control"></input>
                                      </div>
                                    </div>
                                    <label class="label-on-right col-sm-3"><code>required</code></label>
                                </div>
                                <div class="row">
                                    <label class="col-sm-2 col-form-label">Message topic</label>
                                      <div class="col-sm-7">
                                        <div class="form-group">
                                          <input name="email" type="text" class="form-control"></input>
                                        </div>
                                      </div>
                                      <label class="label-on-right col-sm-3"><code>type="text"</code></label>
                                </div>
                                <div class="row">
                                    <label class="col-sm-2 col-form-label">Message subtopic</label>
                                      <div class="col-sm-7">
                                        <div class="form-group">
                                          <input name="number" type="text" class="form-control"></input>
                                        </div>
                                      </div>
                                      <label class="label-on-right col-sm-3"><code>type="text"</code></label>
                                </div>
                                <div class="row">
                                  <label class="col-sm-2 col-form-label">Message duration</label>
                                    <div class="col-sm-7">
                                      <div class="form-group">
                                        <input name="url" type="text" class="form-control"></input>
                                      </div>
                                    </div>
                                    <label class="label-on-right col-sm-3"><code>type="url"</code></label>
                                </div>
                                
                              </div>
                              <div class="row">
                              <div class="col-md-12">
                              <div class="text-center card-footer">
                                <div class = "row">
                                  <div class="col-sm-2 col-form-label"><label class="col-sm-2 col-form-label">files to upload</label></div>{/**empty column for allignment */}
                                  <div class="col-sm-4 col-md-3">
                                    <div class = "card">
                                      <h4 class="card-title">{imageFile? imageFile.name:'No Thumbnail selected'}</h4>
                                        <div class="fileinput text-center">
                                          <input type="file" ref={imageInputRef} style={{display:'none'}} onChange={(e)=>handleFileChange(e,setImageFile)}></input>
                                            <div class="thumbnail img-circle">
                                                {imageFile ?(
                                                    <img src={URL.createObjectURL(imageFile)} alt="Selected" style={{ height: '200px', objectFit: 'cover', objectPosition: 'center' }}  />
                                                  ):(
                                                    <img src="" alt="..." /> 
                                              )}
                                            </div>
                                            <div>
                                              <button type="button" class="btn-round btn btn-default" onClick={()=>handleAddPhotoClick(imageInputRef)}>Add thumbnail</button>
                                              {imageFile&&(<button type="button" className="btn-round btn btn-danger" onClick={()=>handleDeleteClick(setImageFile)}>remove</button>
                                              )}
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                 
                                  <div class="col-sm-4 col-md-3">
                                    
                                    <div class = "card">
                                      <h4 class="card-title">{audioFile? audioFile.name:'no audio file selected'}</h4>
                                        <div class="fileinput text-center">
                                          <input type="file" ref={audioInputRef} style={{display:'none'}} onChange={(e)=>handleFileChange(e,setAudioFile)}></input>
                                            <div class="thumbnail img-circle embed-responsive embed-responsive-16by9">
                                                {audioFile ?(
                                                    <audio class="embed-responsive-item" src={URL.createObjectURL(audioFile)} controls />
                                                  ):(
                                                    <audio src="" alt="..." /> 
                                              )}
                                            </div>
                                            <div>
                                              <button type="button" class="btn-round btn btn-default" onClick={()=>handleAddPhotoClick(audioInputRef)}>Add audio</button>
                                              {audioFile&&(<button type="button" className="btn-round btn btn-danger" onClick={()=>handleDeleteClick(setAudioFile)}>remove</button>
                                              )}
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                  
                                  <div class="col-sm-4 col-md-3">
                                    <div class = "card">
                                      <h4 class="card-title">{videoFile? videoFile.name:'no video file'}</h4>
                                        <div class="fileinput text-center">
                                          <input type="file" ref={videoInputRef} style={{display:'none'}} onChange={(e)=>handleFileChange(e,setVideoFile)}></input>
                                            <div class="thumbnail img-circle embed-responsive embed-responsive-16by9">
                                                {videoFile ?(
                                                    <video class="embed-responsive-item" src={URL.createObjectURL(videoFile)} controls />
                                                  ):(
                                                    <video src="" alt="..." /> 
                                              )}
                                            </div>
                                            <div>
                                              <button type="button" class="btn-round btn btn-default" onClick={()=> handleAddPhotoClick(videoInputRef)}>Add video</button>
                                              {videoFile&&(<button type="button" className="btn-round btn btn-danger" onClick={()=>handleDeleteClick(setVideoFile)}>remove</button>
                                              )}
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                 
                              </div>
                              </div>
                            </div>
                            </div>
                            </div>
                          </div>
                      </Table>
                   
                  
                      <div class="col-md-12">
                                    
                        <div class="card">
                          <div class="card-header">
                            <h4 class="card-title">Select project timelapse</h4>
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
                                          <h4 class="card-title">Time</h4>
                                        </div>
                                        <div class="card-body">
                                          <div class="form-group">
                                            <div class="rdt">
                                              <input type="text" class="form-control" placeholder="Time Picker Here" value={currTime}></input>
                                                
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                      
                                <div class="text-center card-footer">
                                    <button type="button" class="btn btn-primary"onClick={handleFormSubmit}>Create</button>
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
              <Table>
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
                <Col md="4">
                  <Link to="/admin/projects"><Button block color="primary">Go back</Button></Link>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Createproject;
