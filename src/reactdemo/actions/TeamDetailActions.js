import TeamDetailConstant from '../constants/TeamDetailConstant';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Api from '../utils/Api'

const Actions = {
  
  getTeamDetail(id) {
      Api
      .get('/ProjectDetails/TeamMembers/'+id)
      .then(function (teamData) {
         
        TodoDispatcher.dispatch({
            type: TeamDetailConstant.GET_TEAMDATA,
            teamData,
            id,
        }); 
           
      }).catch(function (err) {
            console.log('Error with getting TeamMembers.');
			
             TodoDispatcher.dispatch({
                 type: TeamDetailConstant.GET_TEAMDATA,
                 teamData: 'Error with getting TeamMembers.',
                 id,
                }); 
           });
         
       },

       clearTeamData(){
            TodoDispatcher.dispatch({
                 type: TeamDetailConstant.CLEAR_TEAM_DATA
               
                }); 
           },
       
};


export default Actions;