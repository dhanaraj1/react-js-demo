

import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Api from '../utils/Api'

const Actions = {

  getProjectActivityChartData(id) {
      Api
      .get('/ProjectDetails/getProjectActivityChartData/'+id)
      .then(function (projectinfo) {
        TodoDispatcher.dispatch({
         type: TodoActionTypes.GET_PROJECT_ACTIVITY_CHART_DATA,
         projectinfo,
         id,
       }); 
      })
      .catch(function (err) {
         console.log('Error while getting project activity chart data.');
             TodoDispatcher.dispatch({
            type: TodoActionTypes.GET_PROJECT_ACTIVITY_CHART_DATA,
            projectinfo: 'Error while getting project activity chart data.',
            id,
        }); 
      });
  },
};

export default Actions;
