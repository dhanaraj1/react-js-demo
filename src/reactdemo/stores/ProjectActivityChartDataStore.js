import {ReduceStore} from 'flux/utils';
import TodoActionTypes from '../actions/TodoActionTypes';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

class ProjectActivityChartDataStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
      const projectinfo=[];
      return projectinfo;
  }

  reduce(state, action) {

    switch (action.type) {
        case TodoActionTypes.GET_PROJECT_ACTIVITY_CHART_DATA:
        if (state.length <= 0) {
            state = action.projectinfo;
        }
        return state;

      default:
        return state;
    }
  }
}

export default new ProjectActivityChartDataStore();
