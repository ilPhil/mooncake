import React, {Component} from 'react';
import {connect} from 'react-redux';
import {siteData} from '../actions';

import './app.css';
import Comment from './Comment';
import InputBar from './InputBar';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.siteData !== this.props.siteData) {
      this.props.getComments(this.props.siteData.url);
    }

    const sampleObject = {
      "url":"https%3A%2F%2Fwww.codeworks.me%2F",
      "comment": "sono il componente",
      "date": "Tue Jul 31 2018 13:16:07 GMT+0200 (Central European Summer Time)",
      "postedBy":"5b603acc0b21ceed72f4cd09"
    }

    this.props.postComments(sampleObject);
  }

  render() {
    console.log(this.props);
    console.log(encodeURIComponent(this.props.siteData.url))

    const {title, favIconUrl} = this.props.siteData

    return (
      <div className = {this.props.toggleOpen ? 'wrapperMooncake' :'toggleDisplay'}>
          <div className ="mooncakeComments">
          <div className="topBar">
            <img className="topBar__titleImg"src={'https://res.cloudinary.com/db46klhlo/image/upload/v1532880193/Mooncake.svg'}/>
            <div className="topBar__title">
              <img className="image" src={favIconUrl}/>
              <p className="title">{title}</p>
            </div>
          </div>
          <div className="commentsContainer">
            {this.props.comments.map(comment =>  <Comment commentText={comment.comment}/>)}
          </div>
        </div>
        <InputBar/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  siteData: state.siteData,
  toggleOpen: state.openStatus.flag,
  comments: state.comments,
});



const mapDispatchToProps = (dispatch) => ({
  grabSiteData: (data) => dispatch(siteData(data)),

  getComments: (url) => dispatch({
    type: 'GET_COMMENTS',
    api: {
       endpoint: `/comments/${encodeURIComponent(url)}`,
      //endpoint: `/comments`,
      //endpoint: `/comments/`,
    }
  }),

  postComments: (data) => dispatch({
    type: 'POST_COMMENT',
    api: {
       endpoint: `/comments`,
       method: "POST",
       body: data
    }
  })

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
