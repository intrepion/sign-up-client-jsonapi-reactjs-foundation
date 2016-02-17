import React, { PropTypes, Component } from 'react';

const src = '../images/logo-small.png';

class Logo extends Component {
  render() {
    return (
      <a href=''>
        <img src={src} />
      </a>
    );
  }
}

Logo.propTypes = {
};

export default Logo;
