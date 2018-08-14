import { combineReducers } from 'redux';

import Items from './items';

export default combineReducers({
  items: Items.Reducer,
});
