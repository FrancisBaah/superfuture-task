import { ActionTypes } from "../actions/resourcesAction";

const initialState = {
  resource: [],
};
export const resourceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LIST_RESOURCE:
      return { ...state, resources: payload };
      break;

    default:
      return state;
      break;
  }
};
