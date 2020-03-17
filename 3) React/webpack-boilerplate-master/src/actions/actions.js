import { createAction } from 'redux-actions';

export const signupRequest = createAction('SIGN_UP_REQUEST');
export const signupSuccess = createAction('SIGN_UP_SUCCESS');
export const signupFailure = createAction('SIGN_UP_FAILURE');
