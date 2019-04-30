import React, { Component } from 'react';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import './App.css';
// import classes from '*.module.scss';



class TopPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  

  render() {
    return (
      <div>
        <PrimarySearchAppBar history= {this.props.history}/>
      </div>
    );
  }
}



export default TopPage;