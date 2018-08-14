import { handleActions } from 'redux-actions';
import cloneDeep from 'lodash.clonedeep';

import actionTypes from './action-types';

import { generateId } from './utils';

const initialState = {
  list: [],
};

const createItem = (state = initialState, action) => {
  const { title } = action.payload;

  const id = generateId(state.list);
  const newItem = { id, title, comments: [] };

  const list = [...state.list, newItem];

  return { ...state, list };
};

const deleteItem = (state = initialState, action) => {
  const { itemId } = action.payload;

  const list = state.list.filter(item => item.id !== itemId);

  return { ...state, list };
};

const addComment = (state = initialState, action) => {
  const { itemId, comment } = action.payload;

  const list = cloneDeep(state.list);
  const item = list.find(item => item.id === +itemId);

  const id = generateId(item.comments);
  item.comments.push({ id, value: comment });

  return { ...state, list };
};

export default handleActions({
    [actionTypes.CREATE_ITEM]: createItem,
    [actionTypes.DELETE_ITEM]: deleteItem,
    [actionTypes.CREATE_COMMENT]: addComment,
  },
  initialState,
);
