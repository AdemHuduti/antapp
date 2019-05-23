import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewWorkingItem } from '../actions'

class AddDetails extends Component {
  state = {
    hours: '',
    description: '',
    day: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { hours, description, day } = this.state;

    const newItem = {
      hours,
      description,
      day,
    }

    this.props.createNewWorkingItem(newItem)

  }

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="container mb-5">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="day"
              className="form-control"
              placeholder="Add day"
              onChange={this.onHandleChange} />
            <input
              type="text"
              name="hours"
              className="form-control"
              placeholder="Add hours"
              onChange={this.onHandleChange} />
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Add description"
              onChange={this.onHandleChange} />
            <button>Submit</button>
          </form>
        </div>

      </div>
    )
  }
}

export default connect(null, { createNewWorkingItem })(AddDetails);
