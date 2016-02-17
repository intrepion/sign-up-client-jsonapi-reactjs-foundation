import React, { PropTypes, Component } from 'react';

class NotSignedIn extends Component {
  render() {
    return (
      <ul className='menu'>
        <li><a href=''>Sign In</a></li>
        <li><a className="button" href=''>Sign Up</a></li>
      </ul>
    );
  }
}

NotSignedIn.propTypes = {
};

export default NotSignedIn;
