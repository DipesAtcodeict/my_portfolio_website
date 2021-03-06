import {
  SCROLLTO_REF,
  ADD_ABOUT_REF,
  ADD_HOME_REF,
  ADD_PROFILE_REF,
  ADD_CONTACT_REF,
} from './types';

export function scrollToRef(ref) {
  return {
    type: SCROLLTO_REF,
    payload: ref,
  };
}

export function addAboutRef(ref) {
  return {
    type: ADD_ABOUT_REF,
    payload: ref,
  };
}

export function addHomeRef(ref) {
  return {
    type: ADD_HOME_REF,
    payload: ref,
  };
}

export function addProfileRef(ref) {
  return {
    type: ADD_PROFILE_REF,
    payload: ref,
  };
}

export function addContactRef(ref) {
  return {
    type: ADD_CONTACT_REF,
    payload: ref,
  };
}
