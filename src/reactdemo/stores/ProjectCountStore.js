//import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
//import Todo from '../utils/Todo';
import TodoActionTypes from '../actions/TodoActionTypes';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

class ProjectCountStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
      const projectinfo={};
      return projectinfo;
  }

  reduce(state, action) {

    switch (action.type) {
        case TodoActionTypes.GET_PROJECT_DONE:
      
        if (state.count === undefined) {
            state = action.projectinfo;
        }
        return state;

      default:
        return state;
    }
  }
}

export default new ProjectCountStore();
