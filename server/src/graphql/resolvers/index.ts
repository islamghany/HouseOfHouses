import merge from 'lodash.merge';

import { userResolver } from './user';
import {listingResolver } from './listing';

export default merge(
  userResolver,
  listingResolver
);
