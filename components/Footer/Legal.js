import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class Legal extends Component {
  render() {
    return (
      <ul className='menu'>
        <li><Link to='/terms'>Terms</Link></li>
        <li><Link to='/privacy'>Privacy</Link></li>
        <li><span className='footer-item'>&copy;9999 Company</span></li>
      </ul>
    );
  }
}

Legal.propTypes = {
};

export default Legal;
