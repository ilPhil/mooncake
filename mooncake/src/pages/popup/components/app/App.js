import React, {Component} from 'react';
import {connect} from 'react-redux';
import './app.css';
// import mooncakeTitle from './../../img/Mooncake.svg'
//
// console.log(mooncakeTitle);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "wrapper">
        <div className="topBar">
          <img className="topBar__titleImg"src={'../img/Mooncake.svg'}/>
          <a className="topBar__title">{this.props.siteData.title}</a>
        </div>
        <div className="commentsContainer">

        </div>
        <div className="insertTextcontainer">
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  siteData: state.siteData
});

export default connect(mapStateToProps)(App);
