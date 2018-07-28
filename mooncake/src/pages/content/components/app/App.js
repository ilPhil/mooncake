import React, {Component} from 'react';
import {connect} from 'react-redux';
import {siteData} from '../actions'

// Get the favicon


class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.grabSiteData({
  //     url:document.URL,
  //     title:document.title,
  //     favIconUrl: this.getFavicon()
  //   })
  // }

  render() {
    console.log(this.props);
    return (
      <div className="test" style={{'background':'black','zIndex':'500', 'position':'fixed','bottom':'0','right':'0', 'color':'white !important'}}>
        <p style={{'color':'#ffffff !important','background':'lightGreen'}}> Url: {this.props.siteData.url} </p>
        <p style={{'color':'#ffffff !important','background':'lightGreen'}}> Title: {this.props.siteData.title}</p>
        <img style={{'background':'lightGreen'}} src={this.props.siteData.favIconUrl}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  siteData: state.siteData
});

const mapDispatchToProps = (dispatch) => ({
  grabSiteData: (data) => dispatch(siteData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
