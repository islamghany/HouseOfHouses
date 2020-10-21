/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Signin
// ====================================================

export interface Signin_signin {
  __typename: "Viewer";
  _id: string;
  avatar: string;
  email: string;
  hasWallet: boolean;
  name: string;
}

export interface Signin {
  signin: Signin_signin | null;
}

export interface SigninVariables {
  tokenId: string;
}
