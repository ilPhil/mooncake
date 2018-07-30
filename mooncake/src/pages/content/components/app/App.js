import React, {Component} from 'react';
import {connect} from 'react-redux';
import {siteData} from '../actions';

import './app.css';
import Comment from './Comment';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    const {title, favIconUrl} = this.props.siteData

    return (
      <div className = {this.props.toggleOpen ? 'wrapperMooncake' :'toggleDisplay'}>
        <div className="topBar">
          <img className="topBar__titleImg"src={'https://res.cloudinary.com/db46klhlo/image/upload/v1532880193/Mooncake.svg'}/>
          <div className="topBar__title">
            <img className="image" src={favIconUrl}/>
            <p className="title">{title}</p>
          </div>
        </div>
      {/* <div className="insertTextcontainer">
          <input className="insertTextcontainer__input" type="text"/>
          <div className="insertTextcontainer__sendBtn">
            <img src="https://res.cloudinary.com/db46klhlo/image/upload/v1532880193/airplane.svg"></img>
          </div>
        </div>*/}
        <div className="commentsContainer">
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  siteData: state.siteData,
  toggleOpen: state.openStatus.flag
});

const mapDispatchToProps = (dispatch) => ({
  grabSiteData: (data) => dispatch(siteData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
