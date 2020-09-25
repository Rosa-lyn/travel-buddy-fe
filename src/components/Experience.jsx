import React from "react";
import LikeHandler from "./LikeHandler.jsx";
import "../styles/style.css";
import * as api from "../utils/api";

const Experience = (props) => {
  const {
    title,
    body,
    username,
    created_at,
    experience_id,
    likes,
  } = props.experience;
  const { loggedIn } = props;
  const date = new Date(+created_at);
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1>{title}</h1>
        <p>{body}</p>
        <div className="image-container">
          {props.images.map((image) => (
            <img
              className="experience-image"
              src={image.image_URL}
              alt={image.image_desc}
              key={image.image_id}
            ></img>
          ))}
        </div>
        <p>
          {username} on {date.toLocaleString()}
        </p>
        <p>
          <LikeHandler likes={likes} experience_id={experience_id} />
        </p>
        {loggedIn === username && (
          <button
            onClick={() =>
              api
                .deleteExperience(experience_id)
                .then((deletedExperience) => console.log(deletedExperience))
            }
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Experience;
