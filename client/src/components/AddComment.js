import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../actions/post";

const AddComment = ({ postId, addComment }) => {
  const [formData, setFormData] = useState({
    text: "",
  });

  const { text } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(formData, postId);
    setFormData({ text: "" });
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control my-2"
          name="text"
          onChange={handleChange}
          placeholder="comment"
          value={text}
        />
        <button type="submit" className="btn btn-primary w-100 my-2">
          Add Comment
        </button>
      </form>
    </Fragment>
  );
};

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(AddComment);
