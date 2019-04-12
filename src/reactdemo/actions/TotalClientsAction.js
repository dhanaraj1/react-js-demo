import TotalClientConstant from '../constants/TotalClientConstant';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Api from '../utils/Api'

const Actions ={
    getClients(id){
         Api
      .get('/comapny/clients?id='+id)
      .then(function (clients) {
          console.log("clients ",clients);
        TodoDispatcher.dispatch({
         type: TotalClientConstant.GET_CLIENTS,
         clients,
         id,
        }); 
           
      })
      .catch(function (err) {
         console.log('Error with getting clients.');
				    
             TodoDispatcher.dispatch({
            type: TotalClientConstant.GET_CLIENTS,
            clients: 'Error with getting todos.',
              id,
        }); 
      });
      
    },
};
export default Actions;