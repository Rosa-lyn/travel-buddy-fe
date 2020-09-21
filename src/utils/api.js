import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9090/graphql/",
});

export const getAllExperiences = () => {
  const query = {
    query: "{experiences {experience_id title body username created_at location_lat location_long likes}}",
  };

  return instance.post("/", query).then(
    ({
      data: {
        data: {
          experiences
        },
      },
    }) => experiences
  );
};

export const getSingleExperience = (experience_id) => {
  // const query = {
  //   query: `{experience(experience_id:${experience_id}) {experience_id title body username created_at location_lat location_long likes}}`,
  // };

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

  return instance.post("/", query).then(({
    data: {
      data
    }
  }) => data);

  // return instance.post("/", query).then((res) => console.log(res.data.data.images));
};


export const postComment = (experience_id, username, body) => {
  return instance
    .post(`/experiences/${experience_id}/comments`, {
      username,
      body,
    })
    .then((res) => {
      return res.data.comment;
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
      }}`
  }
  return instance.post("/", query).then(
    ({
      data: {
        data: {
          experiences
        },
      },
    }) => experiences
  );
};

export const deleteComment = (comment_id) => {
  return instance.delete(`/comments/${comment_id}`);
};

export const patchLikes = (id, inc_likes, type) => {
  return instance.patch(`/${type}/${id}`, {
    inc_likes
  });
};