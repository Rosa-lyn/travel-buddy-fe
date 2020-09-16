import React from 'react';

class AddExperience extends React.Component {

  state = {
    title: "",
    username: "tillRitzy",
    body: "",
  }

  handleChange = (e) => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ body: "" })
    const { body } = this.state;
    // this.state.body.length && await api.addExperience(this.props.id, body)
    // need separate file with api calls
  }

  render() {

    return (
      <div>
        <h1>add your experience</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="addExperience">add your own unique experience</label>
          <textarea onChange={this.handleChange} type="textarea" value={this.state.body}
            id="addExperience" name="addExperience" placeholder="add your own unique experience"
            rows="6" cols="40" />
          <input type="submit" value="add image" />
          <input type="submit" value="post" />
        </form>
      </div>
    );
  }
};

export default AddExperience;