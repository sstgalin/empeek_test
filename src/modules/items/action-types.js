import { mapActions } from '../utils';

const actions = [

  'CREATE_ITEM',
  'DELETE_ITEM',

  'CREATE_COMMENT',

];

export default mapActions(actions, 'ITEMS');
