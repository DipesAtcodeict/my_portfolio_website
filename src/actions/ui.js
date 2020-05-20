import { SCROLLTO_REF, ADD_ABOUT_REF } from './types';

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
