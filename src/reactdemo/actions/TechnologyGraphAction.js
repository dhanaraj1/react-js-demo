import TechnologyConstant from '../constants/TechnologyConstant';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Api from '../utils/Api'

const Actions = {
  
  getTechnologies() {
      Api
      .get('/ProjectDetails/Technology/1')
      .then(function (technologies) {
      
        TodoDispatcher.dispatch({
            type: TechnologyConstant.GET_TECHNOLOGY,
            technologies,
        }); 
           
      }).catch(function (err) {
            console.log('Error with getting Technologies.');
			
             TodoDispatcher.dispatch({
                 type: TechnologyConstant.GET_TEAMDATA,
                 technologies: 'Error with getting TeamMembers.',
                }); 
           });
         
       },
};


export default Actions;