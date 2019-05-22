import React, { Component } from 'react';
import Logout from './userComponents/Logout';
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../styles/navstyle.css'

class NavBar extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const successLogin = (
      <div className="d-flex">
        <span className="top">
          <span className="text-light mr-3">{user ? `Welcome, ${user.name}` : ''}</span>
        </span>
          <NavLink to="/home" className="text-light">Home page</NavLink>
          <NavLink to="/profile" className="text-light">Profile</NavLink>
        <span>
          <Logout />
        </span>
      </div>
    );
    const homeButton = (
      <div>
        <NavLink to="/login" className="btn btn-light">Login</NavLink>
      </div>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-lg myNavbar" id="nav">
          <div className="container">
            <Link to="/" className="text-light" style={{fontSize: '1.55rem'}}>Working Hours</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#closeNavBar" aria-controls="closeNavBar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="hamburger-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>

            <div className="collapse navbar-collapse" id="closeNavBar">
              <span className="mr-auto">
              </span>
              <div className="my-2 my-lg-0">
                {isAuthenticated ? successLogin : homeButton}
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(NavBar)
