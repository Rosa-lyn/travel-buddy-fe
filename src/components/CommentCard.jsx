import React from "react";
import LikeHandler from "./LikeHandler";
import '../styles/style.css';

const CommentCard = ({
  loggedInUser,
  body,
  comment_id,
  likes,
  created_at,
  deleteComment,
}) => {
  const date = new Date(+created_at);
  return (
    <li className="comments">
      <p className="author-date">
        {loggedInUser} on {date.toLocaleString()}
      </p>
      <p>{body}</p>
      <label>
        <button
          onClick={(event) => {
            deleteComment(comment_id);
          }}
        >
          delete
        </button>
      </label>
      <LikeHandler likes={likes} comment_id={comment_id} />
    </li>
  );
};

export default CommentCard;
