import { SCROLLTO_REF, ADD_ABOUT_REF, ADD_HOME_REF } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case SCROLLTO_REF:
      window.scrollTo({
        behavior: 'smooth',
        top: action.payload.current.offsetTop,
      });
      return { ...state };

    case ADD_ABOUT_REF:
      return { ...state, aboutRef: action.payload };

    case ADD_HOME_REF:
      return { ...state, homeRef: action.payload };

    default:
      return { ...state };
  }
}
