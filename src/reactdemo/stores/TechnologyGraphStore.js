import {ReduceStore} from 'flux/utils';
import TechnologyConstant from '../constants/TechnologyConstant';
import TodoDispatcher from '../dispatcher/TodoDispatcher';


class TechnologyGraphStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
      const technologies={};
      return technologies;
   // return Immutable.OrderedMap();
  }

  reduce(state, action) {
     
    switch (action.type) {
      case TechnologyConstant.GET_TECHNOLOGY:
    
        if (state.technologies === undefined )
             {state = action.technologies;
                }


      return state;
     

      default:
        return state;
    }
  }
}

export default new TechnologyGraphStore();