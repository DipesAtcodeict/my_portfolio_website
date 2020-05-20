import { SCROLLTO_REF, ADD_ABOUT_REF } from '../actions/types';

export default function (state = {}, action) {
  console.log(action.payload);
  switch (action.type) {
    case SCROLLTO_REF:
      window.scrollTo({
        behavior: 'smooth',
        top: action.payload.current.offsetTop,
      });
      return { ...state };
    case ADD_ABOUT_REF:
      return { ...state, aboutRef: action.payload };
    default:
      return { ...state };
  }
}
