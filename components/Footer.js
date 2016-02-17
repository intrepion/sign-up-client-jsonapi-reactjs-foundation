import React, { PropTypes, Component } from 'react';
import FollowUs from './Footer/FollowUs';
import Legal from './Footer/Legal';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row expanded">
          <div className="medium-9 columns">
            <FollowUs />
          </div>
          <div className="medium-3 columns">
            <Legal />
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
