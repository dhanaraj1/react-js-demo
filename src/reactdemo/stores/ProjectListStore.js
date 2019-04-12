import {ReduceStore} from 'flux/utils';
import ProjectListConstant from '../constants/ProjectListConstant';
import TodoDispatcher from '../dispatcher/TodoDispatcher';


class ProjectListStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
      const projectList=[];
      return projectList;
   // return Immutable.OrderedMap();
  }

  reduce(state, action) {

    switch (action.type) {
      case ProjectListConstant.GET_PROJECT_LIST:
    
        if (state.length <= 0)
             {state = action.projectList;
                }

    
      return state;
     

      default:
        return state;
    }
  }
}

export default new ProjectListStore();