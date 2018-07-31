import React, {Component} from 'react';
import {connect} from 'react-redux';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ""
    }
  }

  handleChange = event => this.setState({value: event.target.value});

  handleKeyPress = event =>  {if (event.key === 'Enter') this.handleClick()};

  handleClick = async () => {

    this.setState({value:""})

    const objToSend = {
      "url":encodeURIComponent(this.props.siteData.url),
      "comment": this.state.value,
      "date": Date.now(),
      "postedBy":"5b603acc0b21ceed72f4cd09"
    }
    await this.props.postComments(objToSend);
    this.props.getComments(this.props.siteData.url);
  }

  render() {
    return (
      <div className="insertTextcontainer">
        <textarea className="insertTextcontainer__input" type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <div className="insertTextcontainer__sendBtn" onClick={this.handleClick}>
          <img src="https://res.cloudinary.com/db46klhlo/image/upload/v1532880193/airplane.svg"></img>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  siteData: state.siteData
});


const mapDispatchToProps = (dispatch) => ({
  getComments: (url) => dispatch({
    type: 'GET_COMMENTS',
    api: {
      endpoint: `/comments/${encodeURIComponent(url)}`,
    }
  }),
  postComments: (data) => dispatch({
    type: 'POST_COMMENT',
    api: {
       endpoint: '/comments',
       method: 'POST',
       body: data
    }
  })

});

export default connect(mapStateToProps, mapDispatchToProps)(InputBar);
