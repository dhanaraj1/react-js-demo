import {ReduceStore} from 'flux/utils';
import TeamDetailConstant from '../constants/TeamDetailConstant';
import TodoDispatcher from '../dispatcher/TodoDispatcher';


class TeamDetailStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
      const teamData=[];
      return teamData;
   // return Immutable.OrderedMap();
  }

  reduce(state, action) {

    switch (action.type) {
      case TeamDetailConstant.GET_TEAMDATA:
    
        if (state.length <= 0)
             {state = action.teamData;
                }
     
    
      return state;
      case TeamDetailConstant.CLEAR_TEAM_DATA:
     
        
       return [];

      default:
        return state;
    }
  }
}

export default new TeamDetailStore();