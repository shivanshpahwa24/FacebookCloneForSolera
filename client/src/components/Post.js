import React from "react";
import Like from "../assets/icons/like.png";
import Dislike from "../assets/icons/dislike.png";
import Heart from "../assets/icons/heart.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addLike,
  addDislike,
  addHeart,
  addLikeToComment,
} from "../actions/post";
import AddComment from "./AddComment";

const Post = ({
  post: { text, likes, _id, dislikes, hearts, comments },
  addLike,
  addDislike,
  addHeart,
  addLikeToComment,
}) => {
  return (
    <div className="card bg-dark text-white my-4">
      <div className="card-body">
        <h4 className="card-title ">{text}</h4>
        <div className="mb-3">
          <span className="mx-3">
            {likes}{" "}
            <button
              type="button"
              className="btn p-0"
              onClick={() => addLike(_id)}
            >
              <img src={Like} height={20} width={20} />
            </button>
          </span>
          <span className="mx-3">
            {dislikes}{" "}
            <button
              type="button"
              className="btn p-0"
              onClick={() => addDislike(_id)}
            >
              <img src={Dislike} height={20} width={20} />
            </button>
          </span>
          <span className="mx-3">
            {hearts}{" "}
            <button
              type="button"
              className="btn p-0"
              onClick={() => addHeart(_id)}
            >
              <img src={Heart} height={20} width={20} />
            </button>
          </span>
        </div>
        <AddComment postId={_id} />
        <div className="comments-box">
          {comments !== null &&
            comments.map((comment) => (
              <div
                className="comment d-flex justify-content-between"
                key={comment._id}
              >
                <div style={{ fontSize: "0.9rem" }}>{comment.text}</div>
                <div style={{ fontSize: "0.9rem" }}>
                  {comment.likes}{" "}
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => {
                      addLikeToComment(_id, comment._id);
                    }}
                  >
                    <img src={Like} height={20} width={20} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  addDislike: PropTypes.func.isRequired,
  addHeart: PropTypes.func.isRequired,
  addLikeToComment: PropTypes.func.isRequired,
};

export default connect(null, {
  addLike,
  addDislike,
  addHeart,
  addLikeToComment,
})(Post);
