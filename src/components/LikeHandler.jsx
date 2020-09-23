import React, { Component } from "react";
import * as api from "../utils/api";

class LikeHandler extends Component {
  state = {
    optimistic_experience_likes: 0,
    optimistic_comment_likes: 0,
  };

  handleExperienceLike = () => {
    const { experience_id } = this.props;
    const { optimistic_experience_likes } = this.state;
    if (optimistic_experience_likes === 0) {
      return api.updateExperienceLikes(experience_id, 1).then(() => {
        return this.setState({ optimistic_experience_likes: 1 });
      });
    } else {
      return api.updateExperienceLikes(experience_id, -1).then(() => {
        return this.setState({ optimistic_experience_likes: 0 });
      });
    }
  };

  handleCommentLike = () => {
    const { comment_id } = this.props;
    const { optimistic_comment_likes } = this.state;
    if (optimistic_comment_likes === 0) {
      return api.updateCommentLikes(comment_id, 1).then(() => {
        return this.setState({ optimistic_comment_likes: 1 });
      });
    } else {
      return api.updateCommentLikes(comment_id, -1).then(() => {
        return this.setState({ optimistic_comment_likes: 0 });
      });
    }
  };

  render() {
    const {
      optimistic_experience_likes,
      optimistic_comment_likes,
    } = this.state;
    const { likes } = this.props;

    return (
      <>
        {this.props.experience_id ? (
          <button className="like-button" onClick={this.handleExperienceLike}>
            {optimistic_experience_likes === 0 ? (
              <span role="img" aria-label="white-heart">
                🤍
              </span>
            ) : (
              <span role="img" aria-label="purple-heart">
                💜
              </span>
            )}
          </button>
        ) : (
          <button className="like-button" onClick={this.handleCommentLike}>
            {optimistic_comment_likes === 0 ? (
              <span role="img" aria-label="white-heart">
                🤍
              </span>
            ) : (
              <span role="img" aria-label="purple-heart">
                💜
              </span>
            )}
          </button>
        )}
        {likes +
          (this.props.experience_id
            ? optimistic_experience_likes
            : optimistic_comment_likes)}
      </>
    );
  }
}
export default LikeHandler;
