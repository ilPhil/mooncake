import React, {Component} from 'react';

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
    );
  }

}

export default Comment;
