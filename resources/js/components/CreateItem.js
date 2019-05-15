// CreateItem.js

import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {formData:{}, errors:{}};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    let {formData, errors} = this.state;
    const { name, value } = event.target;
    formData[name] = value
    this.setState({formData,errors})
  }

  handleSubmit(e) {
    e.preventDefault();
    let errors = this.isValid();
    this.setState({errors:errors})
    if(errors.name==true && errors.email==true && errors.password==true && errors.contact==true){
      let uri = "http://localhost:8000/addStudent";
      axios.post(uri, this.state.formData).then((response) => {
        browserHistory.push('/display-item');
      });
    }
  }

  isValid() {
    let requires = [
      'name',
      'email',
      'password',
      'contact',
    ];
    let {formData, errors} = this.state;
    let keys = Object.keys(formData);
    requires.forEach(each => {
      if (
        keys.indexOf(each) === -1 ||
        formData[each] == null ||
        typeof formData[each] === 'undefined' ||
        formData[each] === ''
      ) {
        errors[each] = 'field is required';
      } else {
        errors[each] = true;
      }
    });
    return errors;
  }

    render() {
      let {formData, errors} = this.state;
     
      return (
      <div>
        <h1>Create An Item</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>User Name:</label>
                <input type="text" name="name" className="form-control" value={formData.name || ''}  onChange={this.handleChange} />
                <span>{errors.name}</span>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" name="password" className="form-control" value={formData.password || ''} onChange={this.handleChange} />
                  <span>{errors.password}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email-ID:</label>
                  <input type="email" name="email" className="form-control" value={formData.email || ''} onChange={this.handleChange} />
                  <span>{errors.email}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Contact:</label>
                  <input type="text" name="contact" maxLength="10" className="form-control" value={formData.contact || ''} onChange={this.handleChange} />
                  <span>{errors.contact}</span>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Item</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateItem;