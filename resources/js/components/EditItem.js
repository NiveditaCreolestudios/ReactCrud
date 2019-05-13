// EditItem.js

import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';

class EditItem extends Component {
  constructor(props) {
      super(props);
      this.state = {formData:{}, errors:{}};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
  	let {formData, errors} = this.state;
    axios.post('http://localhost:8000/getStudent/'+this.props.params.id).then(response => {
      	this.setState({formData:response.data});
    }).catch(function (error) {
      	console.log(error);
    })
  }

  handleChange(event){
  	let {formData, errors} = this.state;
    const { name, value } = event.target;
    formData[name] = value
    if (value !== null && value !== '') {
      errors[name] = false;
    }
    this.setState({formData,errors})
  }

  handleSubmit(event) {
    event.preventDefault();
    let {formData, errors} = this.state;
    let uri = 'http://localhost:8000/update/'+this.props.params.id;
    axios.post(uri, formData).then((response) => {
        browserHistory.push('/display-item');
    });
  }

  render(){
  	let {formData, errors} = this.state;
    return (
      <div>
        <h1>Update Student's Data</h1>
        <form onSubmit={this.handleSubmit}>
        	<div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>User name:</label>
                  <input type="text" name="name" className="form-control" value={formData.name || ''} onChange={this.handleChange} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email ID:</label>
                  <input type="email" name="email" className="form-control" value={formData.email || ''} onChange={this.handleChange} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Contact No:</label>
                  <input type="text" name="contact" className="form-control" value={formData.contact || ''} onChange={this.handleChange} />
                </div>
              </div>
            </div>
            <button className="btn btn-success">Update</button>
        </form>
    </div>
    )
  }
}
export default EditItem;