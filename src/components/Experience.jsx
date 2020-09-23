import React from "react";
import LikeHandler from "./LikeHandler.jsx";
import '../styles/style.css';

const Experience = ({ experience, images }) => {
  const { title, body, username, created_at, likes } = experience;
  const date = new Date(+created_at);
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1>{title}</h1>
        <p>{body}</p>
        <div className="image-container">
          {images.map((image) => (
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
          <LikeHandler />
        likes: {likes}
        </p>
      </div>
    </div>

  );
};

export default Experience;
