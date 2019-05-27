import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { fetchWorkingItems, deleteWorkingItem } from '../actions/';
import AddDetails from './AddDetails';
import "../styles/style.css"

class Home extends Component {
  state = {
    visible: 10,
  };

  componentDidMount() {
    this.props.fetchWorkingItems()
  }
  
  showWorkingHours = () => {
    const { workingHours } = this.props.workingHours;
    return workingHours.slice(0, this.state.visible).map((workingHour) =>
      <table className="table table-bordered text-center fade-in" key={workingHour._id}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Description</th>
            <th>Hours</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{workingHour.day}</td>
            <td className="col">{workingHour.description}</td>
            <td>{workingHour.hours}</td>
            <td>
              <button className="btn btn-danger btn-sm"
                onClick={() => this.props.deleteWorkingItem(workingHour._id) }>
                Delete
            </button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  loadMore = () => {
    this.setState({ visible: this.state.visible + 10 });
  }

  render() {
    const { workingHours } = this.props.workingHours;
    const { isAuthenticated } = this.props.auth;
    return (
      <div >
        <NavBar />
        {
          isAuthenticated ?
            <div className="container">
              <AddDetails />
              <div className="row">
                {
                  workingHours.length ? this.showWorkingHours() : "No working hours"
                }
              </div>
              {
                this.state.visible < workingHours.length &&
                <button onClick={this.loadMore} type="button" className="btn btn-dark btn-sm mobile-button mb-4">Load more</button>
              }
            </div>
            :
            <div className="container mt-4">
              <h4>Please login to access the working hours.</h4>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  workingHours: state.workingHours,
  auth: state.auth
})

export default connect(mapStateToProps, { fetchWorkingItems, deleteWorkingItem })(Home);
