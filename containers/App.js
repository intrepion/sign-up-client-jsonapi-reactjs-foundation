import React, { Component } from 'react';
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import Footer from '../components/Footer';
import Header from '../components/Header';

function App({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default connect(
  null,
  routeActions
)(App)
