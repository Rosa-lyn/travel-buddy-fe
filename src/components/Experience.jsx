import React from "react";
import LikeHandler from "./LikeHandler.jsx";
import "../styles/style.css";
import * as api from "../utils/api";
import { CloseButton } from "../styles/AddExperienceStyles";

const Experience = (props) => {
  const {
    title,
    body,
    username,
    created_at,
    experience_id,
    likes,
  } = props.experience;
  const { loggedInUser, tags, removeExperience } = props;
  const date = new Date(+created_at);
  return (
    <div className="outer-container">
      <div className="experience-inner-container">
        <CloseButton to="/">x</CloseButton>
        <h1>{title}</h1>
        <p>{body}</p>
        {tags.map((tag) => {
          return (
            <p key={tag.tag_id} className="user-date">
              {tag.tag_text}
            </p>
          );
        })}

        <div className="image-container">
          {props.images.length > 0 &&
            props.images.map((image) => (
              <img
                className="experience-image"
                src={image.image_URL}
                alt={image.image_desc}
                key={image.image_id}
              ></img>
            ))}
        </div>
        <div className="experience-user-details-container">
          <p className="user-date">
            {username} on {date.toLocaleString()}
          </p>
          <LikeHandler likes={likes} experience_id={experience_id} />
          {loggedInUser === username && (
            <button
              onClick={() =>
                api.deleteExperience(experience_id).then(() => {
                  removeExperience();
                })
              }
            >
              delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
