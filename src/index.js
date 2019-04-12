

import AppContainer from './reactdemo/components/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,hashHistory, browserHistory ,IndexRoute } from 'react-router-dom'
import TotalClinentRendrer from './reactdemo/components/TotalClinentRendrer'
//import TodoActions from './reactdemo/actions/TodoActions'



const supportsHistory = 'pushState' in window.history
//ReactDOM.render( (<BrowserRouter><AppContainer /></BrowserRouter>), document.getElementById('root'));

//ReactDOM.render( <AppContainer />, document.getElementById('root'));

ReactDOM.render((
  <Router forceRefresh={supportsHistory} history="browserHistory">
    <div>
      <Route exact path="/" component={AppContainer} />
      <Route path="/clients" component={TotalClinentRendrer}  />
    </div>
  </Router>
),document.getElementById('root'));