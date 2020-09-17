import React, { Component } from "react";
import ErrorHandler from "./ErrorHandler";
import Loader from "./Loader";
import * as api from "../utils/api";

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
  AddImageButton,
  FormFont
} from '../styles/AddExperienceStyles'

class AddExperience extends Component {

  state = {
    title: "",
    body: "",
    tags: [],
    err: "",
    isLoading: true,
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  // re: hashtags - body is set in state, then a 
  // function is needed in the backend to filter 
  // out hastags iand save them on a separate key

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ body: "", title: "" })
    const { title } = this.state;
    const { body } = this.state;
    const { tag } = this.state;
    const { username } = this.props;
    this.state.body &&
      api
        .postExperience(title, body, username)
        .then((postedExperience) => {
          this.props.addExperienceToState(postedExperience);
          this.setState({ title: "", body: "" })
        })
        .catch((err) => {
          this.setState({ err: err.response.data.msg, isLoading: false });
        });
  }

  handleClick = () => {

  }

  render() {

    return (
      <FormContainer>
        <FormInnnerContainer>
          <CloseButton to="/">x</CloseButton>
          <FormTitle>add your experience</FormTitle>
          <FormFont onSubmit={this.handleSubmit}>
            <FormLabel htmlFor="addTitle">add experience title</FormLabel>
            <FormInput onChange={this.handleTitleChange} type="text" value={this.state.title} placeholder="add your title"></FormInput>
            <FormLabel htmlFor="addExperience">describe your experience</FormLabel>
            <FormTextarea onChange={this.handleBodyChange} type="textarea" value={this.state.body}
              name="addExperience" placeholder="add your experience"
              rows="6" cols="40" />
            <ButtonContainer>
              <AddImageButton to="/addimage">add image</AddImageButton>
              <Button onClick={this.handleSubmit} type="submit" value="post" />
            </ButtonContainer>
          </FormFont>
        </FormInnnerContainer>
      </FormContainer>
    );
  }
};

export default AddExperience;