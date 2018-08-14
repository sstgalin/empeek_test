
import { createAction } from 'redux-actions';

import actionTypes from './action-types';

const createItem = createAction(actionTypes.CREATE_ITEM, (title) => ({ title }));
const deleteItem = createAction(actionTypes.DELETE_ITEM, (itemId) => ({ itemId }));

const createComment = createAction(actionTypes.CREATE_COMMENT, (comment, itemId) => ({ comment, itemId }));

export default {
  createItem,
  deleteItem,
  createComment,
};
