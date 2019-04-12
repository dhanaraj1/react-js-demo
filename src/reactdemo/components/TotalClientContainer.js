import TotalClientView from './TotalClientView'
import {Container} from 'flux/utils'

import TotalClientStore from '../stores/TotalClientStore'
import TotalClientsAction from '../actions/TotalClientsAction'

function getStores() {
    console.log("client  getStores clalled");
  return [
   
    TotalClientStore,
    
  ];
}

function getState() {
    
  return {
     clients: TotalClientStore.getState(),
     getClients:TotalClientsAction.getClients,
    
  };
}

export default Container.createFunctional(TotalClientView, getStores, getState);