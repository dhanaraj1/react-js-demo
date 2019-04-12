import React from 'react';
import ReactFC from 'react-fusioncharts';

function TechnologyGraph(props){

    props.getTechnologies();
    
    var props_pie_chart = {
        id: "technology_chart",
        renderAt: "technology_chart_container",
        type: "pie3d",
        width:500,
        height: 300,
        dataFormat: "json",
        dataSource: {
                            chart: {
                                startingangle: "120",
                                showlabels: "0",
                                showlegend: "1",
                                enablemultislicing: "0",
                                slicingdistance: "15",
                                showpercentvalues: "1",
                                showpercentintooltip: "0",
                                theme: "ocean"
                            },
                            data: props.technologies.technologies,
                            linkeddata:props.technologies.linkeddata,
                        },
                        events : {
            dataplotclick: function (ev, props) {
              console.log(props);
              console.log(ev);
            }
        }
    };
   
   return( <div id="technology-chart-id"></div>);
  //return( <div><ReactFC {...props_pie_chart} /> </div>);
}
export default TechnologyGraph;