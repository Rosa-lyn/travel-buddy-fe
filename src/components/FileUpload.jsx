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
    uploadedFileURL: "",
  };
  chooseFile = (event) => {
    const selectedFile = event.target.files[0];
    this.setState({ selectedFile });
  };
  uploadImage = (e) => {
    e.preventDefault();
    const { selectedFile } = this.state;

    // create storage reference
    const storageRef = storage.ref(`images/${selectedFile.name}`);

    // upload file
    const uploadTask = storageRef.put(selectedFile);

    // get the image uri and image from firebase
    uploadTask.on("state_changed", console.log, console.error, () => {

      storageRef //storage reference we created above
        .getDownloadURL()
        .then((uploadedFileURL) => {
          this.setState({ uploadedFileURL });
        });
    });
  };
  render() {
    const { selectedFile, uploadedFileURL } = this.state;
    return (
      <div>
        <form onSubmit={this.uploadImage}>
          <FileUploadLabel htmlFor="myfile">add your image:</FileUploadLabel>

          <FileUploadInput
            type="file"
            id="myfile"
            name="myfile"
            onChange={this.chooseFile}
          />

          <AddImageButton type="submit" value="add image" />
        </form>
        <section>
          {selectedFile && (
            <FileStatus>
              you chose {selectedFile.name}
              {/* <br />
              size: {selectedFile.size} bytes
              <br /> */}
            </FileStatus>
          )}
          {/* {uploadedFileURL.length > 0 && (
            <div>
              <h2>image url: {uploadedFileURL}</h2>
              <h2>
                preview:
                <img src={uploadedFileURL} alt={selectedFile.name} />
              </h2>
            </div> */}
          {/* )} */}
        </section>
      </div>
    );
  }
}

export default FileUpload;
