import React, { Component } from "react";
import LikeHandler from "./LikeHandler.jsx";

class Experience extends Component {
  state = {
    userHasLiked: false,
  };
  likeExperience = () => {
    this.setState({
      userHasLiked: !this.state.userHasLiked,
    });
  };

  render() {
    const {
      title,
      body,
      username,
      created_at,
      experience_id,
      likes,
    } = this.props.experience;
    const date = new Date(+created_at);
    const { userHasLiked } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        {this.props.images.map((image) => (
          <img
            className="experience-image"
            src={image.image_URL}
            alt={image.image_desc}
          ></img>
        ))}
        <p>
          {username} on {date.toLocaleString()}
        </p>
        <p>
          <LikeHandler
            likes={likes}
            experience_id={experience_id}
            likeExperience={this.likeExperience}
            userHasLiked={userHasLiked}
          />
        </p>
      </div>
    );
  }
}

export default Experience;
