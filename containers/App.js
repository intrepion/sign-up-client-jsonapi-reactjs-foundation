import React, { Component } from 'react';
import FollowUs from '../components/FollowUs';
import Legal from '../components/Legal';
import Logo from '../components/Logo';
import NotSignedIn from '../components/NotSignedIn';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <Logo />
          </div>
          <div className="top-bar-right">
            <NotSignedIn />
          </div>
        </div>
        <div className="content row medium-8 large-7 columns text-center">
            <img alt="content placeholder" className="thumbnail" src="//placeholdit.imgix.net/~text?txtsize=250&amp;bg=ffffff&amp;txt=&amp;w=800&amp;h=1000&amp;fm=png&amp;txttrack=0" />
        </div>
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
      </div>
    );
  }
}
