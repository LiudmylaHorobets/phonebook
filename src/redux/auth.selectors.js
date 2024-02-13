import { createSelector } from '@reduxjs/toolkit';

const selectAuth = state => state.auth;

export const selectAuthIsloading = createSelector(
  selectAuth,
  auth => auth.isLoading
);

export const selectAuthError = createSelector(selectAuth, auth => auth.error);

export const selectAuthUserToken = createSelector(
  selectAuth,
  auth => auth.token
);
export const selectAuthUserData = createSelector(selectAuth, auth => auth.user);

export const selectAuthUserAuthenticated = createSelector(
  selectAuth,
  auth => auth.authenticated
);