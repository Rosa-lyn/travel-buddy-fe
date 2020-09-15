import React, { Component } from 'react';
import LikeButton from './LikeButton'

class Experience extends Component {
  render() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Soluta, obcaecati reprehenderit sunt ut molestias iste nisi
          quasi blanditiis id maxime?</p>
        <img src="" alt=""></img>
        <p>Roz on Weds 20th Jan</p>
        <p><LikeButton />likes: 10</p>
      </div>
    );
  }
}

export default Experience;