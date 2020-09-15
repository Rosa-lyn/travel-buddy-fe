import React, { Component } from 'react';

class AddComment extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="textarea" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddComment;