import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class NotSignedIn extends Component {
  render() {
    return (
      <ul className='menu'>
        <li><Link to='/sign-in'>Sign In</Link></li>
        <li><Link to='/sign-up' className='button'>Sign Up</Link></li>
      </ul>
    );
  }
}

NotSignedIn.propTypes = {
};

export default NotSignedIn;
