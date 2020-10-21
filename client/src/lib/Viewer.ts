/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Viewer
// ====================================================

export interface Viewer_viewer {
  __typename: "Viewer";
  _id: string;
  avatar: string;
  email: string;
  hasWallet: boolean;
  name: string;
}

export interface Viewer {
  viewer: Viewer_viewer | null;
}
