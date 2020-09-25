import React from "react";
import LikeHandler from "./LikeHandler.jsx";
import "../styles/style.css";

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
  const { tags } = props;
  console.log(tags);
  return (
    // <div className="outer-container">
    <div className="experience-inner-container">
      <h1>{title}</h1>
      <p>{body}</p>
      {tags.map((tag) => {
        return <p className="user-date">{tag.tag_text}</p>;
      })}
      <div className="image-container">
        {props.images.map((image) => (
          // <div className="single-image">
          <img
            className="experience-image"
            src={image.image_URL}
            alt={image.image_desc}
            key={image.image_id}
          ></img>
          // </div>
        ))}
      </div>
      <p className="user-date">
        {username} on {date.toLocaleString()}
        {/* </p> */}
        {/* <p> */}
        <LikeHandler likes={likes} experience_id={experience_id} />
      </p>
    </div>
    // </div >
  );
};

export default Experience;
