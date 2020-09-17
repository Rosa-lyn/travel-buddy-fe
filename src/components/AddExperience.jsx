import React, { Component } from "react";
import { Link } from "@reach/router";
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
  CloseButton
} from '../styles/AddExperienceStyles'

class AddExperience extends Component {

  state = {
    title: "",
    body: "",
    tag: "",
    err: "",
    isLoading: true,
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value })
  }

  handleTagChange = (e) => {
    this.setState({ tag: e.target.value })
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
        .postExperience(title, body, tag, username)
        .then((postedExperience) => {
          this.props.addExperienceToState(postedExperience);
          this.setState({ title: "", body: "", tag: "" })
        })
        .catch((err) => {
          this.setState({ err: err.response.data.msg, isLoading: false });
        });
  }

  render() {

    const { err, isLoading } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;

    return (
      <FormContainer>
        <FormInnnerContainer>
          <FormTitle>add your experience</FormTitle>
          <CloseButton><Link to="/">x</Link></CloseButton>
          <form onSubmit={this.handleSubmit}>
            <FormLabel htmlFor="addTitle">add experience title</FormLabel>
            <FormInput onChange={this.handleTitleChange} type="text" value={this.state.title} placeholder="add your title"></FormInput>
            <FormLabel htmlFor="addExperience">describe your experience</FormLabel>
            <FormTextarea experience_id="2" onChange={this.handleBodyChange} type="textarea" value={this.state.body}
              id="addExperience" name="addExperience" placeholder="add your experience"
              rows="6" cols="40" />
            <FormLabel htmlFor="addTag">add a custom tag</FormLabel>
            <FormInput onChange={this.handleTagChange} type="text" value={this.state.tag} placeholder="add your tags"></FormInput>
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