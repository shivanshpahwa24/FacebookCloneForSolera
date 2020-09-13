import React, { Fragment, useEffect } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import { getAllPosts } from "../actions/post";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AllPosts = ({ getAllPosts, post: { posts, post } }) => {
  useEffect(() => {
    getAllPosts();
  }, [post]);
  return (
    <Fragment>
      <AddPost />
      {posts !== null &&
        posts.map((post) => <Post key={post._id} post={post} />)}
    </Fragment>
  );
};

AllPosts.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getAllPosts })(AllPosts);
