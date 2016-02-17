import React, { PropTypes, Component } from 'react';

class FollowUs extends Component {
  render() {
    return (
      <ul className='menu'>
        <li><span className="footer-item">Follow Us:</span></li>
        <li><a href=''><span className='fi-social-twitter'></span></a></li>
        <li><a href=''><span className='fi-social-facebook'></span></a></li>
        <li><a href=''><span className='fi-social-youtube'></span></a></li>
        <li><a href=''><span className='fi-social-instagram'></span></a></li>
        <li><a href=''><span className='fi-social-pinterest'></span></a></li>
      </ul>
    );
  }
}

FollowUs.propTypes = {
};

export default FollowUs;
