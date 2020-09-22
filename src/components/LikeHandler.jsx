import React, { Component } from "react";
import * as api from "../utils/api";

class LikeHandler extends Component {
  state = {
    inc_likes: 0,
  };

  handleLikeChange = (event) => {
    this.setState(({ inc_likes }) => {
      return {
        inc_likes: inc_likes + event,
      };
    });

    const { experience_id, comment_id } = this.props;
    const inc_likes = event;
    if (experience_id) {
      return api.patchLikes(experience_id, inc_likes).catch((err) => {
        this.setState(({ inc_likes }) => {
          return {
            inc_likes: inc_likes + event,
          };
        });
      });
    } else if (comment_id) {
      return api.patchLikes(comment_id, inc_likes).catch((err) => {
        this.setState(({ inc_likes }) => {
          return {
            inc_likes: inc_likes + event,
          };
        });
      });
    }
  };

  render() {
    const { inc_likes } = this.state;
    const { likes, experience_id, comment_id } = this.props;
    return (
      <div>
        <div className="likes">Likes: {likes + inc_likes} </div>
        <button
          className="like-button"
          onClick={() => this.handleLikeChange(1, experience_id, comment_id)}
          disabled={inc_likes > 0}
        >
          <span role="img" aria-label="thumb-up">
            👍
          </span>
        </button>
        <button
          className="like-button"
          onClick={() => this.handleLikeChange(-1, experience_id, comment_id)}
          disabled={inc_likes < 0}
        >
          <span role="img" aria-label="thumb-down">
            👎
          </span>
        </button>
      </div>
    );
  }
}
export default LikeHandler;
