//import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
//import Todo from '../utils/Todo';
import TodoActionTypes from '../actions/TodoActionTypes';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
//import Actions from '../actions/TodoActions';
//import Counter from '../utils/Counter';


class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
      const projectinfo={};
      return projectinfo;
   // return Immutable.OrderedMap();
  }

  reduce(state, action) {

    switch (action.type) {
      case TodoActionTypes.GET_PROJECTDATA:
       
        if (state.projectName === undefined)
             {state = action.projectinfo;
                }
              

      return state;
     

      default:
        return state;
    }
  }
}

export default new TodoStore();
