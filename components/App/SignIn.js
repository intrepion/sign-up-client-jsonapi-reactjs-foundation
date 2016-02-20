import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SignIn extends Component {
  render() {
    return (
      <div className='content row medium-8 large-7 columns'>
        <h3>Sign In</h3>
        <label>
          Username
          <input type='text' placeholder='Username' />
        </label>
        <label>
          Password
          <input type='password' placeholder='Password' />
        </label>
        <ul className='menu'>
          <li><Link to='/sign-in' className='button'>Sign In</Link></li>
          <li><Link to='/'>Cancel</Link></li>
        </ul>
        <br />
        <p>
          Forgot password?
          <Link to='/reset-password'>Reset password</Link>
        </p>
      </div>
    );
  }
}
