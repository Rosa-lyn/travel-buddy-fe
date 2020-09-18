import React, { Component } from "react";
import { storage } from "../firebase/index";

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
      //   // either:
      //   storage
      //     .ref("images") // name of the folder
      //     .child(selectedFile.name); // name of the file...
      //   //  or:
      storageRef //storage reference we created above
        .getDownloadURL()
        .then((uploadedFileURL) => {
          this.setState({ uploadedFileURL });
        });
    });
    // send upload request to backend
    //  axios.post("api/uploadfile", data);
  };
  render() {
    const { selectedFile, uploadedFileURL } = this.state;
    return (
      <div>
        <form onSubmit={this.uploadImage}>
          <label htmlFor="myfile">add your image:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={this.chooseFile}
          />
          <input type="submit" value="upload image" />
        </form>
        <section>
          {selectedFile && (
            <p>
              file name: {selectedFile.name}
              {/* <br />
              size: {selectedFile.size} bytes
              <br /> */}
            </p>
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
