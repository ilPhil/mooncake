import React, {Component} from 'react';
import {connect} from 'react-redux';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {title, favIconUrl} = this.props.siteData

    return (
      <div className = "wrapper">
        <div className="topBar">
          <img className="topBar__titleImg"src={'../img/Mooncake.svg'}/>
          <div className="topBar__title">
            <img className="image" src={favIconUrl}/>
            <p className="title">{title}</p>
          </div>
        </div>
        <div className="insertTextcontainer">
          <input className="insertTextcontainer__input" type="text"/>
          <div className="insertTextcontainer__sendBtn">
            <img src="../img/airplane.svg"></img>
          </div>
        </div>
        <div className="commentsContainer">
          <div className="comment">
            <div className="comment__details">
              <div className="imageNameContainer">
                <img className="imageNameContainer__img" src="../img/placeholder.jpg"/>
                <p className="imageNameContainer__name">Leonardo Di Vittorio</p>
              </div>
              <a>4m</a>
            </div>
            <p className="comment__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et dignissim erat. Praesent eleifend sem sit amet placerat fermentum. Sed sagittis eros quam, scelerisque mollis mi semper quis. Pellentesque non malesuada est, a porta felis. Ut euismod,
            </p>
            <div className="comment__reactionsContainer">
              <div className="reactioins">
                <p className="reactioin"><span>😀</span>2</p>
                <p className="reactioin"><span>💩</span>2</p>
                <p className="reactioin"><span>🧐</span>2</p>
                <p className="reactioin"><span>😎</span>2</p>
              </div>
              <p className="addReaction">+</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  siteData: state.siteData
});

export default connect(mapStateToProps)(App);
