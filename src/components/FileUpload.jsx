import React, { Component } from "react";
import { storage } from "../firebase/index";

import {
  AddImageButton,
  FileUploadLabel,
  FileStatus,
  FileUploadInput,
} from '../styles/AddExperienceStyles'


class FileUpload extends Component {
  state = {
    selectedFile: null,
  };
  chooseFile = (event) => {
    const selectedFile = event.target.files[0];
    this.setState({ selectedFile });
  };
  uploadImageToFirebase = (e) => {
    // this adds the image to the firebase database and then adds the image's url to the state on AddExperience
    e.preventDefault();
    const { selectedFile } = this.state;

    // create storage reference
    const storageRef = storage.ref(`${selectedFile.name}`);

    // upload file
    const uploadTask = storageRef.put(selectedFile);

    // get the image uri and image from firebase
    uploadTask.on("state_changed", console.log, console.error, () => {
      storageRef //storage reference we created above
        .getDownloadURL()
        .then((uploadedFileURL) => {
          const { setImageURL } = this.props;
          console.log("file uploaded!", uploadedFileURL);
          setImageURL(uploadedFileURL);
        });
    });
  };
  render() {
    const { selectedFile } = this.state;
    return (
      <>
        <>
          <FileUploadLabel htmlFor="myfile">add your image:</FileUploadLabel>

          <FileUploadInput
            type="file"
            id="myfile"
            name="myfile"
            onChange={this.chooseFile}
          />
          <AddImageButton
            type="button"
            value="add image"
            onClick={this.uploadImageToFirebase}
          />
        </>
        <section>
          {selectedFile && (
            <FileStatus>you chose {selectedFile.name}</FileStatus>
          )}
        </section>
      </>
    );
  }
}

export default FileUpload;
