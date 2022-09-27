import { CREATE_TUTORIAL, RETRIEVE_TUTORIALS, UPDATE_TUTORIAL } from "../actions/types";
const initialState = [];

function tutorialReducer(tutorials = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TUTORIAL:
      return [...tutorials, payload];
    case RETRIEVE_TUTORIALS:
      return payload;
    case UPDATE_TUTORIAL:
      return tutorials.map((tutorial) => {
        if (tutorial._id === payload._id) {
          return {
            ...tutorial,
            ...payload,
          };
        } else {
          return tutorial;
        }
      });
    default:
      return tutorials;
  }
}

export default tutorialReducer;
