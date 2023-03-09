import { ActionTypes } from "./resourcesAction";

export const listResources = (resources) => {
  return {
    type: ActionTypes.LIST_RESOURCE,
    payload: resources,
  };
};

export const createResource = (resource) => {
  return {
    type: ActionTypes.CREATE_RESOURCE,
    payload: resource,
  };
};
