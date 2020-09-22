import React, { Component } from "react";
import * as api from "../utils/api";
import FileUpload from "./FileUpload";
import separatesHashtags from "../utils/utils";

import {
  FormContainer,
  FormInput,
  FormTitle,
  FormTextarea,
  Button,
  ButtonContainer,
  FormLabel,
  FormInnnerContainer,
  CloseButton,
  FormFont,
} from "../styles/AddExperienceStyles";

class AddExperience extends Component {
  state = {
    title: "",
    body: "",
    tags: [],
    err: "",
    isLoading: true,
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  // re: hashtags - body is set in state, then a
  // function is needed in the backend to filter
  // out hastags iand save them on a separate key

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, body } = this.state;
    const { username } = this.props;
    //need the coordinates of clicked map
    // console.log(title, body);
    // const tags = separatesHashtags(body);
    // console.log(tags);
    this.state.body &&
      api
        .postExperience(title, body, username)
        .then((postedExperience) => {
          this.props.addExperienceToState(postedExperience);
          this.setState({ title: "", body: "" });
        })
        .catch((err) => {
          this.setState({ err: err.response.data.msg, isLoading: false });
        });
  };

  render() {
    const { newLat, newLong } = this.props;
    return (
      <FormContainer>
        {/* div */}
        <p>
          new experience location is: [{newLat}, {newLong}]
        </p>
        <FormInnnerContainer>
          {/* div */}

          <CloseButton to="/">x</CloseButton>
          <FormTitle>add your experience</FormTitle>

          <FormFont onSubmit={this.handleSubmit}>
            {/* form */}

            <FormLabel htmlFor="addTitle">add experience title</FormLabel>
            {/* label */}

            <FormInput
              onChange={this.handleTitleChange}
              type="text"
              value={this.state.title}
              placeholder="add your title"
            ></FormInput>
            <FormLabel htmlFor="addExperience">
              describe your experience
            </FormLabel>
            <FormTextarea
              onChange={this.handleBodyChange}
              type="textarea"
              value={this.state.body}
              name="addExperience"
              placeholder="add your experience"
              rows="6"
              cols="40"
            />
            <FileUpload />
            <ButtonContainer>
              {/* div */}

              {/* <AddImageButton to="/addimage">add image</AddImageButton> */}
              <Button type="submit" value="post" />
            </ButtonContainer>
          </FormFont>
        </FormInnnerContainer>
      </FormContainer>
    );
  }
}

export default AddExperience;
