import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SignUp extends Component {
  render() {
    return (
      <div className='content row medium-8 large-7 columns'>
        <h3>Sign Up</h3>
        <label>
          Username
          <input type='text' placeholder='Username' />
        </label>
        <label>
          Password
          <input type='password' placeholder='Password' />
        </label>
        <label>
          Confirm
          <input type='password' placeholder='Confirm' />
        </label>
        <input id='terms' type='checkbox' /><label htmlFor='terms'>I agree with <Link to='/terms'>Terms</Link></label>
        <ul className='menu'>
          <li><Link to='/sign-up' className='button'>Sign Up</Link></li>
          <li><Link to='/'>Cancel</Link></li>
        </ul>
        <br />
        <p>
          Already signed up?
          <Link to='/sign-in'>Sign in</Link>
        </p>
      </div>
    );
  }
}
