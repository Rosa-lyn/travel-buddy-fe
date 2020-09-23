import React, { Component } from "react";
import * as api from "../utils/api";

class LikeHandler extends Component {
  state = {
    inc_likes: 0, //optimistic likes
  };

  handleLikeChange = (like, experience_id, comment_id) => {
    console.log(like, experience_id);
    const { likeExperience, userHasLiked } = this.props;
    const { inc_likes } = this.state;
    if (experience_id) {
      if (userHasLiked === false) {
        if (inc_likes === 0) {
          return api
            .updateExperienceLikes(experience_id, inc_likes)
            .then(() => {
              return this.setState(({ inc_likes }) => {
                return {
                  inc_likes: inc_likes + like,
                };
              });
            });
        } else {
          return api
            .updateExperienceLikes(experience_id, inc_likes)
            .then(() => {
              return this.setState(({ inc_likes }) => {
                return {
                  inc_likes: inc_likes - like,
                };
              });
            });
        }
        //  return likeExperience()
      } else {
        // maybe we don't need an else
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
    const { inc_likes } = this.state;
    const { likes, experience_id, comment_id, userHasLiked } = this.props;
    return (
      <div>
        <button
          className="like-button"
          onClick={() => this.handleLikeChange(1, experience_id, comment_id)}
          // disabled={userHasLiked}
        >
          <span role="img" aria-label="heart">
            💜
          </span>
        </button>
        likes: {inc_likes + likes}
      </div>
    );
  }
}
export default LikeHandler;
