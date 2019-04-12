import {ReduceStore} from 'flux/utils';
import TotalClientConstant from '../constants/TotalClientConstant';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

class TotalClientStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
      const clients={};
      return clients;
   // return Immutable.OrderedMap();
  }

  reduce(state, action) {
     
    switch (action.type) {
      case TotalClientConstant.GET_CLIENTS:
    
        if (state.clients === undefined )
             {state = action.clients;
                }


      return state;
     

      default:
        return state;
    }
  }
}

export default new TotalClientStore();