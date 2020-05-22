import {
  SCROLLTO_REF,
  ADD_ABOUT_REF,
  ADD_HOME_REF,
  ADD_PROFILE_REF,
  ADD_CONTACT_REF,
} from '../actions/types';

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

    case ADD_PROFILE_REF:
      return { ...state, profileRef: action.payload };

    case ADD_CONTACT_REF:
      return { ...state, contactRef: action.payload };

    default:
      return { ...state };
  }
}
