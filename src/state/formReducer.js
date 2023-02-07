import { formTypes } from "./formTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  pcs: 0,
  feedback: "",
  term: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case formTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case formTypes.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };
    case formTypes.MINUS:
      return {
        ...state,
        pcs: state.pcs - 1,
      };
    case formTypes.PLUS:
      return {
        ...state,
        pcs: state.pcs + 1,
      };
    default:
      return state;
  }
};
