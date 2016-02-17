import React, { PropTypes, Component } from 'react';
import Logo from './Header/Logo';
import NotSignedIn from './Header/NotSignedIn';

class Header extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <Logo />
        </div>
        <div className="top-bar-right">
          <NotSignedIn />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;
