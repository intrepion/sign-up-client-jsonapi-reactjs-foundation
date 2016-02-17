import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content row medium-8 large-7 columns text-center">
            <img alt="content placeholder" className="thumbnail" src="//placeholdit.imgix.net/~text?txtsize=250&amp;bg=ffffff&amp;txt=&amp;w=800&amp;h=1000&amp;fm=png&amp;txttrack=0" />
        </div>
        <Footer />
      </div>
    );
  }
}
