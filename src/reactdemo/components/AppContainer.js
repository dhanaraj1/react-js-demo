

import AppView from './AppView';
import {Container} from 'flux/utils';

import TodoActions from '../actions/TodoActions';
import TeamDetailActions from '../actions/TeamDetailActions';
import ProjectActivityChartDataAction from '../actions/ProjectActivityChartDataAction';
import TechnologyGraphAction from '../actions/TechnologyGraphAction';
import ProjectListAction from '../actions/ProjectListAction'

import TodoStore from '../stores/TodoStore';
import TeamDetailStore from '../stores/TeamDetailStore';
import ProjectCountStore from '../stores/ProjectCountStore';
import ProjectActivityChartDataStore from '../stores/ProjectActivityChartDataStore';
import TechnologyGraphStore from '../stores/TechnologyGraphStore';
import ProjectListStore from '../stores/ProjectListStore';

function getStores() {
    
  return [
   
    TodoStore,
    TeamDetailStore,
    ProjectCountStore,
    ProjectActivityChartDataStore,
    TechnologyGraphStore,
    ProjectListStore,
  ];
}

function getState() {
    
  return {
     todos: TodoStore.getState(),
     getData:TodoActions.getProjectData,
     teamData:TeamDetailStore.getState(),
     getTeamData:TeamDetailActions.getTeamDetail,
     clearTeamData:TeamDetailActions.clearTeamData,
	 projectCount: ProjectCountStore.getState(),
	 projectDone:TodoActions.getProjectDone,
     totalClients:TodoActions.getTotalClients,
	 projectActivityChartData: ProjectActivityChartDataStore.getState(),
     getProjectActivityChartData:ProjectActivityChartDataAction.getProjectActivityChartData,
     technologies:TechnologyGraphStore.getState(),
     getTechnologies:TechnologyGraphAction.getTechnologies,
     getProjectList:ProjectListAction.getProjectList,
     projectList:ProjectListStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);
