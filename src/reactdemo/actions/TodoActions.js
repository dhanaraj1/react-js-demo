

import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Api from '../utils/Api'

const Actions = {
  
  getProjectData(id) {
      Api
      .get('/ProjectDetails/'+id)
      .then(function (projectinfo) {
         // console.log("hello from action");
        TodoDispatcher.dispatch({
         type: TodoActionTypes.GET_PROJECTDATA,
         projectinfo,
         id,
        }); 
           
      })
      .catch(function (err) {
         console.log('Error with getting todos.');
				    
             TodoDispatcher.dispatch({
            type: TodoActionTypes.GET_PROJECTDATA,
            projectinfo: 'Error with getting todos.',
              id,
        }); 
      });
      
      
    
  },
  
  getProjectDone() {
      Api
      .get('/getProjectDone')
      .then(function (projectinfo) {
        TodoDispatcher.dispatch({
         type: TodoActionTypes.GET_PROJECT_DONE,
         projectinfo,
        }); 
           
      })
      .catch(function (err) {
         console.log('Error while getting total project done.');
				console.log(err); 
             TodoDispatcher.dispatch({
            type: TodoActionTypes.GET_PROJECT_DONE,
            projectinfo: 'Error while getting total project done.',
        }); 
      });
  },

  getTotalClients() {
      Api
      .get('/getTotalClients')
      .then(function (projectinfo) {
        TodoDispatcher.dispatch({
         type: TodoActionTypes.GET_TOTAL_CLIENT,
         projectinfo,
        }); 
           
      })
      .catch(function (err) {
         console.log('Error while getting total clients.');
				console.log(err); 
             TodoDispatcher.dispatch({
            type: TodoActionTypes.GET_TOTAL_CLIENT,
            projectinfo: 'Error while getting total clients.',
        }); 
      });
  },

};

export default Actions;
