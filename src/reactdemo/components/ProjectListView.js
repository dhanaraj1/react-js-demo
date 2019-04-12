import React from 'react';
import ProjectListConstant from '../constants/TeamDetailConstant'

function ProjectListView(props){
    props.getProjectList();
    const projectChange = (event) => {
    
               props.todos.projectName =undefined;
               props.clearTeamData();
               props.projectActivityChartData.length=0;

              

               props.getData(event.target.value);
               props.getTeamData(event.target.value);
               props.getProjectActivityChartData(event.target.value);

           
    };
    return(
 
    <form className="form">
    <div className="form-group " id ="project-list-id">
    <label><h3>Project Information</h3></label>
    <select className="form-control"  onChange={projectChange} >
     {props.projectList.map(function(projectList, index){
                    return <option  value={projectList.projectId}>{projectList.projectName}</option>
                  })}
    </select>
    </div>
    </form>
    
    );

}


export default ProjectListView;