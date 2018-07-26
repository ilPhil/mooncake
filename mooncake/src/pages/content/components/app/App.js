import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(document.URL);
    console.log(document.title);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });
  }

  render() {
    console.log('helllo');
    return (
      <div className="test" style={{'width':'100px', 'height':'40px', 'background':'black','zIndex':'500', 'position':'fixed', 'color':'white'}}>
        Count: {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
