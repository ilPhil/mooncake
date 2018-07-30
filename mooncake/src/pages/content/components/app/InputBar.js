import React, {Component} from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="insertTextcontainer">
        <textarea className="insertTextcontainer__input" type="text"/>
        <div className="insertTextcontainer__sendBtn">
          <img src="https://res.cloudinary.com/db46klhlo/image/upload/v1532880193/airplane.svg"></img>
        </div>
      </div>
    );
  }

}

export default InputBar;
