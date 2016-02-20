import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ResetPassword extends Component {
  render() {
    return (
      <div className='content row medium-8 large-7 columns'>
        <h3>Reset Password</h3>
        <label>
          Username
          <input type='text' placeholder='Username' />
        </label>
        <ul className='menu'>
          <li><Link to='/reset-password' className='button'>Reset Password</Link></li>
          <li><Link to='/sign-in'>Cancel</Link></li>
        </ul>
        <br />
        <p>
          Don't have an account?
          <Link to='/sign-up'>Sign up</Link>
        </p>
      </div>
    );
  }
}
