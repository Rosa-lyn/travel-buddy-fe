import React from "react";
import LikeHandler from "./LikeHandler.jsx";

const Experience = (props) => {
  const {
    title,
    body,
    username,
    created_at,
    experience_id,
    likes,
  } = props.experience;
  const date = new Date(+created_at);
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      {props.images.map((image) => (
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
        <LikeHandler likes={likes} experience_id={experience_id} />
      </p>
    </div>
  );
};

export default Experience;
