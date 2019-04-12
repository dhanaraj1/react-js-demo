import ProjectListConstant from '../constants/ProjectListConstant';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Api from '../utils/Api'


const Actions = {
  
  getProjectList() {
      Api
      .get('/ProjectDetails')
      .then(function (projectList) {
         
        TodoDispatcher.dispatch({
            type: ProjectListConstant.GET_PROJECT_LIST,
            projectList,
        }); 
           
      }).catch(function (err) {
            console.log('Error with getting projectList.');
			
             TodoDispatcher.dispatch({
                 type: ProjectListConstant.GET_PROJECT_LIST,
                 projectList: 'Error with getting projectList.',
                }); 
           });
         
       },
};


export default Actions;