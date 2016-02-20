import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

const src = '../images/logo-small.png';

class Logo extends Component {
  render() {
    return (
      <Link to='/'>
        <img src={src} />
      </Link>
    );
  }
}

Logo.propTypes = {
};

export default Logo;
