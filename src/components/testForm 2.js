<form onSubmit={this.handleSubmit}>
  <label htmlFor="commentInput">Add comment:</label>
  <textarea onChange={this.handleChange} value={this.state.body} type="textarea"
    id="commentInput" name="commentInput" placeholder="What's your opinion?"
    rows="5" cols="40" />
  <button>add comment</button>
</form>