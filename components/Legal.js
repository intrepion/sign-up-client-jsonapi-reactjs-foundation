import React, { PropTypes, Component } from 'react';

class Legal extends Component {
  render() {
    return (
      <ul className='menu'>
        <li><a href=''>Terms</a></li>
        <li><a href=''>Privacy</a></li>
        <li><span className='footer-item'>&copy;9999 Company</span></li>
      </ul>
    );
  }
}

Legal.propTypes = {
};

export default Legal;
