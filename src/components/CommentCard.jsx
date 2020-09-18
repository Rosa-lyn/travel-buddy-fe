import React from "react";
import LikeHandler from "./LikeHandler";

const CommentCard = ({
  username,
  body,
  comment_id,
  likes,
  created_at,
  deleteComment,
}) => {
  return (
    <li className="comments">
      <p className="author-date">
        {username} {new Date(created_at).toLocaleString()}
      </p>
      <p>{body}</p>
      <label>
        <button
          onClick={(event) => {
            deleteComment(comment_id);
          }}
        >
          Delete Comment
        </button>
      </label>

      <LikeHandler likes={likes} comment_id={comment_id} />
    </li>
  );
};

export default CommentCard;
