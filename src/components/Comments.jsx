import React, { Component } from 'react';
import CommentList from './CommentList'
import AddComment from './AddComment'

class Comments extends Component {
  render() {
    return (
      <div>
        <CommentList />
        <AddComment />
      </div>
    );
  }
}

export default Comments;