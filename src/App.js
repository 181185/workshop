import React, { Component } from 'react';
import MovieList from './MovieList';
// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
import Helmet from "react-helmet";


class App extends Component {
  render() {
    return (
      <div></div>
    );
  }
}
export default () => <div>
<Helmet title="MovieList" />
<MovieList /></div>
