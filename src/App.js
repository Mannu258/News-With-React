import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';

export default class 
 extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <News/>
      </div>
    )
  }
}