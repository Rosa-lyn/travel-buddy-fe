import axios from "axios";

const axiosEvent = axios.create({
  baseURL: "",
});

export const postComment = (experience_id, username, body) => {
  return axiosEvent
    .post(`/experiences/${experience_id}/comments`, {
      username,
      body,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const getCommentsByExperienceId = (experience_id) => {
  return axiosEvent
    .get(`/experiences/${experience_id}/comments`)
    .then((res) => {
      return res.data.comments;
    });
};
export const deleteComment = (comment_id) => {
  return axiosEvent.delete(`/comments/${comment_id}`);
};

export const patchLikes = (id, inc_likes, type) => {
  return axiosEvent.patch(`/${type}/${id}`, { inc_likes });
};
