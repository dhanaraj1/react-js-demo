
import React from 'react';

import TeamDetailView from './TeamDetailView'
import ProjectActivity from './ProjectActivity'
import TechnologyGraph from './TechnologyGraph'
import ProjectListView from './ProjectListView'
import ContactUs from './ContactUs'
import CompanyProfile from "./CompanyProfile"
import TotalClinentRendrer from './TotalClinentRendrer'

import  TotalClientContainer from './TotalClientContainer'
import TotalClientView from './TotalClientView'
import AppContainer from './AppContainer'
import index from '../../index'

import {  Redirect } from 'react-router'
import { BrowserRouter as Router,  Link ,Switch,Route} from 'react-router-dom';

//import { GridStack, GridStackItem } from 'react-gridstack'
function AppView(props) {
  return (
    <div>
      <Header {...props} />
      
     
    </div>
  );
}

function Header(props) {
  return (
       <header id="header">
     
      <NewTodo {...props} />
    </header>
  );
}




function NewTodo(props) {
  
  const getProjectData = () => props.getData(1);
  getProjectData();

  const projectDone = () => props.projectDone();
  projectDone();
  //console.log("hello from AppView");
   

  return (
  <div>
   
   <section id="demo" className ="body_background">
    <div className="container">
     <div className="grid-stack grid-stack-instance-4316" data-gs-width="12" data-gs-animate="yes">

   <div className="grid-stack-item " data-gs-x="0" data-gs-y="0" data-gs-width="2" data-gs-height="2">
            <div className="grid-stack-item-content">
                    Total Clients<br/><br/>
                     
                        <div id="projectNameID">
                      
                      
	                        <Switch>
				            <Link from="/" to="/clients" ><b>{props.projectCount.count}</b></Link>
                           </Switch>
                   
                        </div>
                   
            </div>
      </div>
  
      <div className="grid-stack-item " data-gs-x="0" data-gs-y="3" data-gs-width="2" data-gs-height="2">
            <div className="grid-stack-item-content">
                    Projects Done<br/><br/>
                <div id="projectCountId">
				    <b>{props.projectCount.count}</b>
                </div>
            </div>
      </div>

       <div className="grid-stack-item " data-gs-x="2" data-gs-y="2" data-gs-width="2" data-gs-height="2">
            <div className="grid-stack-item-content">
                    On Board Projects<br/><br/>
                <div id="recentProjectId">
				    <b>{props.projectCount.count}</b>
                </div>
            </div>
      </div>

       <div className="grid-stack-item " data-gs-x="2" data-gs-y="4" data-gs-width="2" data-gs-height="2">
            <div className="grid-stack-item-content">
                   Company Prteners<br/><br/>
                <div id="recentProjectId">
				    <b>{props.projectCount.count}</b>
                </div>
            </div>
      </div>

          
    <div className="grid-stack-item" data-gs-x="4" data-gs-y="4" data-gs-width="8" data-gs-height="4">
                    <div className="grid-stack-item-content">
                        Technology Used
                          <TechnologyGraph  {...props}/>  
                    </div>
      </div>

      

      <div className="grid-stack-item " data-gs-x="2" data-gs-y="9" data-gs-width="8" data-gs-height="2">
            <div className="" id="project-info-div-id">
                                   
				   <ProjectListView {...props}/>
                
            </div>
      </div>
      
        <div className="grid-stack-item " data-gs-x="0" data-gs-y="11" data-gs-width="4" data-gs-height="2">
            <div className="grid-stack-item-content">
                    Project Name<br/><br/>
                <div id="projectNameID">
				    <b>{props.todos.projectName}</b>
                </div>
            </div>
      </div>   
      
      <div className="grid-stack-item " data-gs-x="4" data-gs-y="11" data-gs-width="4" data-gs-height="2">
            <div className="grid-stack-item-content">
                    Client Name<br/><br/>
                <div id="projectNameID">
				    <b>{props.todos.clientName}</b>
                </div>
            </div>
      </div>
	  
      <div className="grid-stack-item " data-gs-x="8" data-gs-y="11" data-gs-width="4" data-gs-height="2">
        <div className="grid-stack-item-content">
            Project Domain<br/><br/>
            <div id="projectDomainId">
				<b className="header">{props.todos.project_domain}</b>
            </div>
        </div>
      </div>
      
       <div className="grid-stack-item" data-gs-x="0" data-gs-y="14" data-gs-width="7" data-gs-height="5">
                    <TeamDetailView {...props} />
       </div>   

       <div className="grid-stack-item" data-gs-x="7" data-gs-y="14" data-gs-width="5" data-gs-height="5">
                    <div className="grid-stack-item-content"></div>
                    <div className="grid-stack-item-content">
                        Project Activity
                        <ProjectActivity {...props} /> 
                    </div>
                </div>
                <div className="grid-stack-item " data-gs-x="0" data-gs-y="19" data-gs-width="4" data-gs-height="2">
            <div className="grid-stack-item-content">
                    Benifites of Project<br/><br/>
                <div id="benifite-project-id">
				   <a href="#"> <b>{props.todos.benifite}</b></a>
                </div>
            </div>
      </div>   
      
      <div className="grid-stack-item " data-gs-x="4" data-gs-y="19" data-gs-width="4" data-gs-height="2">
            <div className="grid-stack-item-content">
                    Country<br/><br/>
                <div id="countryId">
				    <b>{props.todos.counrty}</b>
                </div>
            </div>
      </div>
	  
      <div className="grid-stack-item " data-gs-x="8" data-gs-y="19" data-gs-width="4" data-gs-height="2">
        <div className="grid-stack-item-content">
            Hour Spent<br/><br/>
            <div id="hour-spent-id">
				<b className="header">{props.todos.hourSpent}</b>
            </div>
        </div>
      </div>
     </div >

    </div>
     <ContactUs {...props} />
     <CompanyProfile {...props} />
   </section>
  </div>
  );
}


  



export default AppView
