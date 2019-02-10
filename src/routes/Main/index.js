import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import BottomBar from '../../components/BottomBar';

class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        Main
        <BottomBar />
      </div>
    );
  }
}

export default Main;