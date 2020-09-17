import React from 'react';
import { FormContainer, FormInput, FormTitle, FormTextarea, Button, ButtonContainer, FormLabel, FormInnnerContainer } from '../styles/AddExperienceStyles'

class AddExperience extends React.Component {

  state = {
    title: "",
    username: "tillRitzy",
    body: "",
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
    const { body } = this.state;
    // this.state.body.length && await api.addExperience(this.props.id, body)
    // need separate file with api calls
  }

  render() {

    return (
      <FormContainer>
        <FormInnnerContainer>
          <FormTitle>add your experience</FormTitle>
          <form onSubmit={this.handleSubmit}>
            <FormLabel htmlFor="addTitle">add experience title</FormLabel>
            <FormInput id="1" onChange={this.handleTitleChange} type="text" value={this.state.title} placeholder="add your title"></FormInput>
            <FormLabel htmlFor="addExperience">describe your experience</FormLabel>
            <FormTextarea id="2" onChange={this.handleBodyChange} type="textarea" value={this.state.body}
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