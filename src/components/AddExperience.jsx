import React, { Component } from "react";
import { Link } from "@reach/router";
// import ErrorHandler from "./ErrorHandler";
// import Loader from "./Loader";
// import * as api from "../utils/api";
import {
  FormContainer,
  FormInput,
  FormTitle,
  FormTextarea,
  Button,
  ButtonContainer,
  FormLabel,
  FormInnnerContainer,
  CloseButton
} from '../styles/AddExperienceStyles'

class AddExperience extends React.Component {

  state = {
    title: "",
    body: "",
    err: "",
    isLoading: true,
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ body: "", title: "" })
    const { title } = this.state;
    const { body } = this.state;
    const { username } = this.props;
    // this.state.body.length &&
    //   api
    //     .postExperience(title, body, username, experience_id)
    //     .then((postedExperience) => {
    //       this.props.addExperienceToState(postedExperience);
    //       this.setState({ title: "", body: "", experience_id: "", username: "" })
    //     })
    //     .catch((err) => {
    //       this.setState({ err: err.response.data.msg, isLoading: false });
    //     });
  }

  render() {

    return (
      <FormContainer>
        <FormInnnerContainer>
          <FormTitle>add your experience</FormTitle>
          {/* <CloseButton><Link to="/">x</Link></CloseButton> */}
          <form onSubmit={this.handleSubmit}>
            <FormLabel htmlFor="addTitle">add experience title</FormLabel>
            <FormInput experience_id="1" onChange={this.handleTitleChange} type="text" value={this.state.title} placeholder="add your title"></FormInput>
            <FormLabel htmlFor="addExperience">describe your experience</FormLabel>
            <FormTextarea experience_id="2" onChange={this.handleBodyChange} type="textarea" value={this.state.body}
              id="addExperience" name="addExperience" placeholder="add your experience"
              rows="6" cols="40" />
            <ButtonContainer>
              <Button type="submit" value="add image" />
              <Button type="submit" value="post" />
            </ButtonContainer>
          </form>
        </FormInnnerContainer>
      </FormContainer>
    );
  }
};

export default AddExperience;