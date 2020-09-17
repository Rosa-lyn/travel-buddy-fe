import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9090/graphql/",
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

export const postComment = () => {
  console.log("not written yet");
};
