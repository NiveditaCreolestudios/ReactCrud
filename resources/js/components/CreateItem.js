// CreateItem.js

import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', password: '', emailID: '', contact: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({name: e.target.value})

  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }
  handleEmailChange(e) {
    this.setState({emailID: e.target.value})
  }
  handleContactChange(e) {
    this.setState({contact: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const data = {
      name: this.state.name,
      email: this.state.emailID,
      password: this.state.password,
      contact: this.state.contact
    }
    let uri = "http://localhost:8000/addStudent";
    axios.post(uri, data).then((response) => {
      browserHistory.push('/display-item');
    });
  }

    render() {
      return (
      <div>
        <h1>Create An Item</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>User Name:</label>
                <input type="text" className="form-control" onChange={this.handleNameChange} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" className="form-control" onChange={this.handlePasswordChange} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email-ID:</label>
                  <input type="email" className="form-control" onChange={this.handleEmailChange} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Contact:</label>
                  <input type="text" maxLength="10" className="form-control" onChange={this.handleContactChange} />
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