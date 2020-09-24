import React, { Component } from "react";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";
import * as api from "../utils/api";
import AddComment from "./AddComment.jsx";
import '../styles/style.css';

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: "",
  };
  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;

    const { comments } = this.state;
    return (
      <div className="outer-container">
        <div className="inner-container">
          <AddComment
            loggedInUser={this.props.loggedInUser}
            experience_id={this.props.experience_id}
            addNewComment={this.addNewComment}
          />
          <ul className="comments-list">
            {comments.map((comment) => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  {...comment}
                  loggedInUser={this.props.loggedInUser}
                  deleteComment={this.deleteComment}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getCommentsByExperienceId();
  }
  getCommentsByExperienceId = () => {
    const { experience_id } = this.props;
    api
      .getCommentsByExperienceId(experience_id)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
  addNewComment = (newComment) => {
    this.setState((currentState) => {
      return {
        comments: [newComment, ...currentState.comments],
      };
    });
  };
  // deleteComment = (comment_id) => {
  //   api
  //     .deleteComment(comment_id)
  //     .then(() => {
  //       this.setState((currentState) => {
  //         const newComments = currentState.comments.filter((comment) => {
  //           return comment_id !== comment.comment_id;
  //         });
  //         return { comments: newComments };
  //       });
  //     })
  //     .catch((err) => {
  //       this.setState({ err: err.response.data.msg, isLoading: false });
  //     });
  // };
}
export default CommentsList;
