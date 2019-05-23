import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { fetchWorkingItems, deleteWorkingItem } from '../actions/';
import AddDetails from './AddDetails';

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
      <div className="col-md-3 col-sm-12" key={workingHour._id}>
        <div className="text-center mb-3 card">
          <h5 className="mt-2">{workingHour.day}</h5>
          {workingHour.description}
          <p>{workingHour.hours}</p>
          <div className="card-footer">
            <button className="btn btn-outline-danger btn-sm" 
            onClick={this.deleteItem.bind(this, workingHour._id)}>
            Delete</button>
          </div>
        </div>
      </div>
    )
  }

  loadMore = () => {
    this.setState({ visible: this.state.visible + 10 });
  }

  render() {
    return (
      <div >
        <NavBar />
        <AddDetails />
        <div className="container">
          <div className="row">
            {this.showWorkingHours()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  workingHours: state.workingHours
})

export default connect(mapStateToProps, { fetchWorkingItems, deleteWorkingItem })(Home);
