/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ListingType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetListings
// ====================================================

export interface GetListings_listings_result_host {
  __typename: "User";
  name: string;
  avatar: string;
}

export interface GetListings_listings_result {
  __typename: "Listing";
  country: string;
  admin: string | null;
  city: string;
  _id: string;
  address: string;
  price: number;
  image: string;
  type: ListingType;
  numOfGuests: number;
  description: string;
  title: string;
  host: GetListings_listings_result_host;
}

export interface GetListings_listings {
  __typename: "ListingConnection";
  result: (GetListings_listings_result | null)[] | null;
}

export interface GetListings {
  listings: GetListings_listings;
}

export interface GetListingsVariables {
  limit: number;
  page: number;
  keyword: string;
}
