import * as types from "./types";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case types.SET_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
        addr: action.payload.addr,
      };
    case types.SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case types.SET_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case types.SET_MONTH_COST:
      return {
        ...state,
        month_costs: action.payload,
      };
    case types.SET_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    case types.SET_RECOMMEND_SIZE:
      return {
        ...state,
        recommend_size: action.payload,
      };
    case types.SET_INSTALL_COST:
      return {
        ...state,
        install_cost: action.payload,
      };
    case types.SET_MODEL:
      return {
        ...state,
        model: action.payload,
      };
    case types.SET_MODEL_ID:
      return {
        ...state,
        model_id: action.payload,
      };
    case types.SET_OPEN_MENU:
      return {
        ...state,
        openMenu: action.payload,
      };
    default:
      return state;
  }
};
