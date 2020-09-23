import React, { Component } from "react";
import * as api from "../utils/api";

class LikeHandler extends Component {
  state = {
    optimistic_likes: 0,
  };

  handleLikeChange = () => {
    const { experience_id, comment_id } = this.props;
    const { optimistic_likes } = this.state;
    if (experience_id) {
      if (optimistic_likes === 0) {
        return api.updateExperienceLikes(experience_id, 1).then(() => {
          return this.setState({ optimistic_likes: 1 });
        });
      } else {
        return api.updateExperienceLikes(experience_id, -1).then(() => {
          return this.setState({ optimistic_likes: 0 });
        });
      }
    }
    /*   else if (comment_id) {
      return api.patchLikes(comment_id, inc_likes).catch((err) => {
        this.setState(({ inc_likes }) => {
          return {
            inc_likes: inc_likes + like,
          };
        });
      }); 
    } */
  };

  render() {
    const { optimistic_likes } = this.state;
    const { likes } = this.props;
    return (
      <div>
        <button className="like-button" onClick={this.handleLikeChange}>
          {optimistic_likes === 0 ? (
            <span role="img" aria-label="white-heart">
              🤍
            </span>
          ) : (
            <span role="img" aria-label="purple-heart">
              💜
            </span>
          )}
        </button>{" "}
        {likes + optimistic_likes}
      </div>
    );
  }
}
export default LikeHandler;
