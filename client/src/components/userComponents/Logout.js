import React, { Component } from 'react';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <button className="btn btn-light btn-sm" onClick={() => this.props.logout()}>Logout</button>
      </div>
    )
  }
}

export default connect(null, {logout})(Logout)