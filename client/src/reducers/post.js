import {
  ADD_POST,
  GET_POSTS,
  POST_ERROR,
  CLEAR_POST,
  ADD_DISLIKE,
  ADD_LIKE,
  ADD_HEART,
  ADD_COMMENT,
} from "../actions/types";

const initialState = {
  post: null,
  posts: [],
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST:
      return {
        ...state,
        post: payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_POST:
      return {
        ...state,
        post: null,
      };
    case ADD_LIKE:
      return {
        ...state,
        post: { ...state.post, likes: payload },
      };
    case ADD_DISLIKE:
      return {
        ...state,
        post: { ...state.post, dislikes: payload },
      };
    case ADD_HEART:
      return {
        ...state,
        post: { ...state.post, hearts: payload },
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
      };

    default:
      return state;
  }
}
