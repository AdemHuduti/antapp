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
        <div className="container mb-5 mt-5">
          <form onSubmit={this.onSubmit}>
            <div className="form-row">
              <div className="col-md-3">
                <input
                  required
                  type="text"
                  name="day"
                  className="form-control mb-2"
                  placeholder="Add day"
                  onChange={this.onHandleChange} />
              </div>

              <div className="col-md-3">
                <input
                  required
                  type="number"
                  name="hours"
                  className="form-control mb-2"
                  placeholder="Add hours"
                  onChange={this.onHandleChange} />
              </div>
              <div className="col-md-3">
                <input
                  required
                  type="text"
                  name="description"
                  className="form-control mb-2"
                  placeholder="Add description"
                  onChange={this.onHandleChange} />
              </div>
              <div className="col-md-3">
                <button className="btn btn-outline-dark">Submit</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default connect(null, { createNewWorkingItem })(AddDetails);
