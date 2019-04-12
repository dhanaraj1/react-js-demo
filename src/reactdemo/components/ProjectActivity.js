import React from 'react';
import ReactFC from 'react-fusioncharts';
import ProjectActivityChartDataAction from '../actions/ProjectActivityChartDataAction';

function ProjectActivity(props){
       
    const test = () => props.getProjectActivityChartData(1);
    test();

    var myDataSource = {
        chart: {
            startingangle: "120",
            showlabels: "0",
            showlegend: "1",
            enablemultislicing: "0",
            slicingdistance: "15",
            showpercentvalues: "1",
            showpercentintooltip: "0",
            theme: "zune"
        },
        data:props.projectActivityChartData,
    }
    var props_pie_chart = {
        id: "project_activity",
        renderAt: "project_activity_container",
        type: "pie3d",
        width:450,
        height: 300,
        dataFormat: "json",
        dataSource: myDataSource
    };

    return( <div><ReactFC {...props_pie_chart} /> </div>);
}
export default ProjectActivity;