import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import PropTypes from 'prop-types';
import '../../styles/style.css';

class Registraton extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.message });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // Create new user
    const newUser = {
      name,
      email,
      password
    };

    // Register new user
    this.props.registerUser(newUser);
  };

  render() {
    const { msg } = this.state;
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        <div className="mainDiv">
        {
          isAuthenticated ? 
          <div>
            <h3 className="text-center">Welcome, {user.name}</h3> 
            <p>Click <Link to="/home">here</Link> to start asking questons</p>
          </div>
          :
          <div className="card">
            <div className="card-body">
              <h5 className="auth-form__title text-center mb-4">Sign up</h5>
              {msg ? (
                <div className="alert alert-danger alert-dismissible fade show">
                {msg}
                  <button onClick={() => this.props.clearErrors()} type="button" className="close mr-2" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              ) : null}

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter Name'
                    className="form-control"
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    className="form-control"
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    className="form-control"
                    onChange={this.onChange}
                  />
                </div>
                <button type="submit" className="btn btn-dark btn-accent d-table mx-auto mt-3">Sign up</button>
              </form>
            </div>

            <div className="card-footer border-top">
              <ul className="auth-form__social-icons d-table mx-auto">
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        }
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  error: state.error,
  auth: state.auth
})

export default connect(mapStateToProps, { registerUser, clearErrors })(Registraton)