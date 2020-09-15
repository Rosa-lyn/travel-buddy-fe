import React, { Component } from 'react';
import LikeButton from './LikeButton'

class CommentCard extends Component {
  render() {
    return (
      <div>
        <h1>Coffeee Smell</h1>
        <p>I love the smell of fresh coffeee in the morning!</p>
        <p>Steve on Weds Jan 20th</p>
        <LikeButton />
        <p>likes: 5</p>
      </div>
    );
  }
}

export default CommentCard;