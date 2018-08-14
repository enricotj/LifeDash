import { FETCH_PILLARS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PILLARS:
      return action.payload;
    default:
      return state;
  }
};