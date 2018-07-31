import React, {Component} from 'react';
import {connect} from 'react-redux';

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
  }

  getComments = () => {
    const {comments} = this.props;
    return comments.map(comment =>  <Comment key={comment._id} commentText={comment.comment}/>)
  }

  render() {

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
            {this.getComments()}
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

  getComments: (url) => dispatch({
    type: 'GET_COMMENTS',
    api: {
      endpoint: `/comments/${encodeURIComponent(url)}`,
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
