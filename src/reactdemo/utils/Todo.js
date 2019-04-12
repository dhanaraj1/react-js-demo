

import Immutable from 'immutable';

const Todo = Immutable.Record({

    projectId: '',
    projectName: '',
    clientName: '',
    project_status: '',
    project_duration:'',
    project_domain: '',
    
});

export default Todo;
