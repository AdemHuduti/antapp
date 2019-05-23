import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { fetchWorkingItems, deleteWorkingItem } from '../actions/';
import AddDetails from './AddDetails';
import moment from 'moment';
import "../styles/style.css"

class Home extends Component {
  state = {
    visible: 10,
  };

  componentDidMount() {
    this.props.fetchWorkingItems()
  }

  deleteItem = (id) => {
    this.props.deleteWorkingItem(id)
  }

  showWorkingHours = () => {
    const { workingHours } = this.props.workingHours;
    return workingHours.slice(0, this.state.visible).map((workingHour) =>
      <div className="col-md-4" key={workingHour._id}>
        <div className="text-center mb-3 border border-dark fade-in">
          <h5 className="card-header">{workingHour.day}</h5>
          <p>{workingHour.description}</p>
          <p>{workingHour.hours}</p>
          <p>{moment(workingHour.date).format('DD.MM.YYYY')}</p>
          <div className="card-footer">
            <button className="btn btn-outline-danger btn-sm"
              onClick={this.deleteItem.bind(this, workingHour._id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }

  loadMore = () => {
    this.setState({ visible: this.state.visible + 10 });
  }

  render() {
    const { workingHours } = this.props.workingHours;
    const { isAuthenticated } = this.props.auth;
    console.log(workingHours)
    return (
      <div >
        <NavBar />
        {
          isAuthenticated ?
            <div className="container">
              <AddDetails />
              <div className="row">
                {this.showWorkingHours()}
              </div>
              {
                this.state.visible < workingHours.length &&
                <button onClick={this.loadMore} type="button" className="btn btn-dark btn-sm mobile-button mb-4">Load more</button>
              }
            </div>
            :
            <h4>Please login to access the working hours.</h4>
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
