import React from 'react';
import CommentCard from './CommentCard';

const CommentList = () => {
  return (
    <div>
      <ul className="commentList">
        <li><CommentCard /></li>
        <li><CommentCard /></li>
        <li><CommentCard /></li>
      </ul>
    </div>
  );
};

export default CommentList;