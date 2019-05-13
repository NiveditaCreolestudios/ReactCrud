// DisplayItem.js

import React, {Component} from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class DisplayItem extends Component {
  constructor(props) {
    super(props);
    this.state = {'students':''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tabRow = this.tabRow.bind(this);
  }

  componentDidMount() {
    this.getRecords()
  }

  getRecords(){
    axios.get('http://localhost:8000/students').then(response => {
      this.setState({'students':response.data})
    }).catch(function (error) {
      console.log(error);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let uri = "http://localhost:8000/delete/" + event.target.value;
    axios.get(uri).then(response => {
      this.getRecords()
    }).catch(function (error) {
      console.log(error);
    })
  }

  tabRow() {
    if(this.state.students.length > 0) {
      return this.state.students.map((obj, i)=> {
        return(
          <tr key={i}>
            <td>
              {obj.name}
            </td>
            <td>
              {obj.email}
            </td>
            <td>
              {obj.contact}
            </td>
            <td>
              <Link to={"/edit/"+obj.id} className="btn btn-primary">Update</Link>
              &nbsp;
              <button value={obj.id} onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-danger">Delete</button>
            </td>
          </tr>
        )
      })
    }else{
      return(
        <tr>
          <td colSpan="4">No data found..</td>
        </tr>
      )
    }
  }

  render(){
    return (
      <div>
        <h1>Students</h1>

        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item" className="btn btn-success">Add Student</Link>
          </div>
        </div><br />

        <table className="table table-hover">
            <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Contact</td>
              <td>Actions</td>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayItem;