import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/post";
import PropTypes from "prop-types";

const AddPost = ({ addPost }) => {
  const [formData, setFormData] = useState({
    text: "",
  });

  const { text } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData({ text: "" });
  };
  return (
    <Fragment>
      <div className="mb-4">
        <h4 className="text-white">What's on your mind?</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control my-2"
            name="text"
            value={text}
            onChange={handleChange}
            placeholder="enter your thoughts"
            style={{ height: "5rem" }}
          />
          <button type="submit" className="btn btn-primary w-100 my-2">
            Add Post
          </button>
        </form>
      </div>{" "}
    </Fragment>
  );
};
AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(AddPost);
