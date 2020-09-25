import axios from "axios";

const instance = axios.create({
  baseURL: "https://travel-buddy-2020.herokuapp.com/graphql",
});

export const getAllExperiences = () => {
  const query = {
    query:
      "{experiences {experience_id title body username created_at location_lat location_long likes}}",
  };
  return instance.post("/", query).then(
    ({
      data: {
        data: { experiences },
      },
    }) => experiences
  );
};

export const getSingleExperience = (experience_id) => {
  const query = {
    query: `{experience(experience_id:${experience_id}) {
    experience_id
    title
    body
    username
    created_at
    location_lat
    location_long
    likes
  }
  comments(experience_id:${experience_id}) {
    comment_id
    created_at
    body
    likes
    username
  }
  images(experience_id:${experience_id}) {
    image_id
    image_desc
    image_URL
  }}`,
  };
  return instance.post("/", query).then(({ data: { data } }) => data);
};

//get graphql running and check return keys for then statements

export const postExperience = (
  title,
  body,
  username,
  location_lat,
  location_long
) => {
  const mutation = {
    query: `mutation { addExperience(input: {
      title:"${title}",
      body:"${body}",
      username:"${username}",
      location_lat:"${location_lat}",
      location_long:"${location_long}"
    }) {
      experience_id
      title
      body
      username
      created_at
      location_lat
      location_long
      likes}}`,
  };
  return instance
    .post("/", mutation)
    .then(({ data: { data } }) => data.addExperience);
  //check
};

export const postImage = (experience_id, image_URL, image_desc) => {
  const mutation = {
    query: `mutation{ addImage(input: {
      experience_id: "${experience_id}",
      image_URL: "${image_URL}",
      image_desc: "${image_desc}"
    }) {
      image_id
      image_desc
      image_URL
      experience_id
    }}`,
  };
  return instance.post("/", mutation).then(({ data: { data } }) => {
    return data.addImage;
  });
};

export const postComment = (experience_id, username, body) => {
  const mutation = {
    query: `mutation{ addComment(input: {
      experience_id:"${experience_id}",
      body:"${body}",
      username:"${username}"
    }) {
      comment_id
      body
      username
      created_at
      likes}}`,
  };
  return instance.post("/", mutation).then(({ data: { data } }) => {
    return data.addComment;
  });
};

export const getCommentsByExperienceId = (experience_id) => {
  const query = {
    query: `{comments(experience_id:${experience_id}) {
        comment_id
        created_at
        body
        likes
        username
      }}`,
  };
  return instance.post("/", query).then(
    ({
      data: {
        data: { comments },
      },
    }) => comments
  );
};
export const deleteComment = (comment_id) => {
  return instance.delete(`/comments/${comment_id}`);
};

export const updateExperienceLikes = (experience_id, inc_likes) => {
  const mutation = {
    query: `mutation{updateExperienceLikes(input:{experience_id:${experience_id}, inc_likes: ${inc_likes}}){experience_id title body username created_at location_lat location_long likes}}`,
  };
  return instance
    .post(`/`, mutation)
    .then(({ data: { updateExperienceLikes } }) => updateExperienceLikes);
};

export const updateCommentLikes = (comment_id, inc_likes) => {
  const mutation = {
    query: `mutation{updateCommentLikes(input:{comment_id:${comment_id}, inc_likes: ${inc_likes}}){comment_id body username created_at likes}}`,
  };
  return instance
    .post(`/`, mutation)
    .then(({ data: { updateExperienceLikes } }) => updateExperienceLikes);
};

export const deleteExperience = (experience_id) => {
  const mutation = {
    query: `mutation{deleteExperience(input:{experience_id:${experience_id}}){experience_id}}`,
  };
  return instance.post("/", mutation).then(
    ({
      data: {
        data: { deleteExperience },
      },
    }) => deleteExperience
  );
};
