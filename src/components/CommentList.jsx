import React, { Component } from "react";
import CommentCard from "./CommentCard";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";
import * as api from "../utils/api";
import AddComment from "./AddComment.jsx";

class CommentsList extends Component {
  state = {
    commentsByExperienceId: [],
    isLoading: true,
    err: "",
  };
  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;

    return (
      <>
        <AddComment
          username={this.props.username}
          experience_id={this.props.article_id}
          addCommentToState={this.addCommentToState}
        />
        <ul className="comments-list">
          {this.state.commentsByExperienceId.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                {...comment}
                username={this.props.username}
                deleteComment={this.deleteComment}
              />
            );
          })}
        </ul>
      </>
    );
  }
  componentDidMount() {
    this.getComments();
  }
  getCommentsByExperienceId = () => {
    const { experience_id } = this.props;
    api
      .getCommentsByExperienceId(experience_id)
      .then((commentsByExperienceId) => {
        this.setState({ commentsByExperienceId, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
  addCommentToState = (newComment) => {
    this.setState((currentState) => {
      return {
        commentsByExperienceId: [
          newComment,
          ...currentState.commentsByExperienceId,
        ],
      };
    });
  };
  deleteComment = (comment_id) => {
    api
      .deleteComment(comment_id)
      .then(() => {
        this.setState((currentState) => {
          const newCommentsByExperienceId = currentState.commentsByExperienceId.filter(
            (comment) => {
              return comment_id !== comment.comment_id;
            }
          );
          return { commentsByExperienceId: newCommentsByExperienceId };
        });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
}
export default CommentsList;
