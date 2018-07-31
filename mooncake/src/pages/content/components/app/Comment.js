import React, {Component} from 'react';
import moment from 'moment'

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="comment">
        <div className="comment__details">
          <div className="imageNameContainer">
            <img className="imageNameContainer__img" src="https://res.cloudinary.com/db46klhlo/image/upload/v1532880194/placeholder.jpg"/>
            <p className="imageNameContainer__name">Leonardo Di Vittorio</p>
          </div>
          <p className="imageNameContainer__time">{moment.utc(this.props.date).format("lll")}</p>
        </div>
        <p className="comment__content">{this.props.commentText}</p>
        <div className="comment__reactionsContainer">
          <div className="reactioins">
            <p className="reactioin"><span>😀</span>2</p>
            <p className="reactioin"><span>💩</span>14</p>
            <p className="reactioin"><span>🧐</span>2</p>
          </div>
          <div className="addReaction">+</div>
        </div>
      </div>

    );
  }

}

export default Comment;
