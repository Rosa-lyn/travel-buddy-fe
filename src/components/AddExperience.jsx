import React, { Component } from "react";
import * as api from "../utils/api";
import FileUpload from "./FileUpload";
import separatesHashtags from "../utils/utils";

import { navigate } from "@reach/router";
import Page from "../styles/Page.js";

import {
  OuterFormContainer,
  FormContainer,
  FormInput,
  FormTitle,
  FormTextarea,
  ButtonContainer,
  FormLabel,
  FormInnnerContainer,
  CloseButton,
  FormFont,
  PostButton,
  // OuterContainer,
} from "../styles/AddExperienceStyles";

class AddExperience extends Component {
  state = {
    title: "",
    body: "",
    image_URL: null,
    image_desc: "",
    experience_id: null,
    // tags: [],
    err: "",
    isLoading: true,
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
      // image_desc: e.target.value
    });
  };

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    const {
      loggedInUser,
      newPinLocation: { location_lat, location_long },
    } = this.props;
    this.state.body &&
      api
        .postExperience(title, body, loggedInUser, location_lat, location_long)
        .then((postedExperience) => {
          const { experience_id } = postedExperience;
          this.setState({ experience_id });
        })
        .then(() => {
          // get all the tags from the db
          return api.getAllTags(); // [{tag_id: 1, tag_text:"#tag"},{...}]
        })
        .then((allTagObjects) => {
          //get the hashtags off the body
          let tagsFromBody = separatesHashtags(body); //["#tag", "#from", "#body",]

          if (tagsFromBody === null) tagsFromBody = ["#newexperience"];

          //filter the tag objects so we only have ones that are already in the db. this is so we can get those ids and won't need to make a second getAllTags() request
          const filteredtagObjects = allTagObjects.filter((tagObject) => {
            return tagsFromBody.includes(tagObject.tag_text);
          }); // [{tag_id: 1, tag_text:"#tag"}]

          // map the filtered tag objects so we have an array of the ids of the tags that are aready in the db
          const tagIds = filteredtagObjects.map(
            (tagObject) => tagObject.tag_id
          ); //["1"]

          // get only the tag text from the ones that are in the db
          const tagTextFromDataBase = allTagObjects.map((tagObject) => {
            return tagObject.tag_text;
          }); // ["#tag"]

          // filter tags from body so we only have the ones that aren't in the db
          const tagsToAdd = tagsFromBody.filter((tagFromBody) => {
            return !tagTextFromDataBase.includes(tagFromBody);
          });

          //if they aren't already in db post them to the tags table
          const promises = [];
          tagsToAdd.forEach((tagToAdd) => {
            promises.push(api.postNewTag(tagToAdd));
          });
          promises.push(tagIds);
          return Promise.all(promises);
        })
        .then((newlyAddedTags) => {
          const tagIds = newlyAddedTags.pop();
          // push the ids of the newly added tags to the tagId array
          newlyAddedTags.forEach((newlyAddedTag) => {
            tagIds.push(newlyAddedTag.tag_id);
          });
          const { experience_id } = this.state;
          // post to tag-exp junction table
          tagIds.forEach((tagId) => {
            api.postTagToExperience(experience_id, tagId);
          });
        })
        .then(() => {
          const { experience_id, image_URL, image_desc } = this.state;
          if (image_URL !== null) {
            return api.postImage(experience_id, image_URL, image_desc);
          }
        })
        .then(() => {
          const { experience_id } = this.state;
          navigate(`/experience/${experience_id}`);
        })
        .catch((err) => {
          console.log(err);
          this.setState({ err: err.response.data.msg, isLoading: false });
        });
  };

  setImageURL = (image_URL) => {
    this.setState({ image_URL });
  };

  render() {
    const { image_URL } = this.state;
    const { toggleMapClicked } = this.props;
    return (
      <Page>
        <OuterFormContainer>
          <FormContainer>
            {/* div */}

            <FormInnnerContainer>
              {/* div */}

              <CloseButton to="/" onClick={toggleMapClicked}>
                x
              </CloseButton>
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
                  required
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
                  required
                />
                <FileUpload
                  setImageURL={this.setImageURL}
                  image_URL={image_URL}
                />
                <ButtonContainer>
                  {/* div */}

                  <PostButton type="submit" value="submit" />
                </ButtonContainer>
              </FormFont>
            </FormInnnerContainer>
          </FormContainer>
        </OuterFormContainer>
      </Page>
    );
  }
}

export default AddExperience;
