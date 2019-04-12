$(document).ready(function () {

    //Ajax call to get Graph data

    var technologyGraphData = {};
    $.ajax({
        url: "http://192.168.1.159:8080/SecondRestApi/ProjectDetails/Technology/1"

    })
  .done(function (data) {
      technologyGraphData = data;

  });

  //Initialize Technology chart 

    FusionCharts.ready(function () {
        var salesChart = new FusionCharts({
            type: 'pie3d',
            renderAt: 'technology-chart-id',
            width: '500',
            height: '250',
            dataFormat: 'json',
            id: "myChartId",
            dataSource: {
                "chart": {
                    startingangle: "120",
                                showlabels: "0",
                                showlegend: "1",
                                enablemultislicing: "0",
                                slicingdistance: "15",
                                showpercentvalues: "1",
                                showpercentintooltip: "0",
                                theme: "ocean",
                },
                "data": technologyGraphData.technologies,
                "linkeddata":technologyGraphData.linkeddata,
                },
                

        });

    //custome setting for second pichart render after click on first chart

        salesChart.configureLink (
      {
        type : "pie3d",
         width: '600',
          height: '250',
        overlayButton:
        {    
          message: 'back',
          fontColor : '880000',
          bgColor:'FFEEEE',
          borderColor: '660000'
        }
      }, 0);
     
      //custom setting for column chart 

       salesChart.configureLink (
      {
        type : "mscolumn3d",
         width: '450',
        overlayButton:
        {    
          message: 'back',
          fontColor : '880000',
          bgColor:'FFEEEE',
          borderColor: '660000'
        }
      }, 1);

      //Custom settings for gantt chart

      salesChart.configureLink (
      {
        type : "gantt",
        overlayButton:
        {    
          message: 'back',
          fontColor : '880000',
          bgColor:'FFEEEE',
          borderColor: '660000'
        }
      }, 2);
    
  
        salesChart.render();
    });


    //******* Right side popover (Contact us) ************/
     $('#conatctus-parent-id').BootSideMenu({
        side: "right",
        pushBody: false,
        remember: false,
        duration:500,
        width:830
       
    });
    $('#company-parent-id').BootSideMenu({
        side: "left",
        pushBody: false,
        remember: false,
        width:400
       
    });
   
    leftToogle();
    rightToogle();

    function rightToogle(){
        $("#conatctus-parent-id .toggler span").trigger( "click" );
    }

    function leftToogle(){
        $("#company-parent-id .toggler span").trigger( "click" );
    }

    $("#company-child-id").click(function(){
        leftToogle();
    });

    $("#conatctus-child-id").click(function(){
        rightToogle();
    });

    $("#btn-id-subscribe").submit(function(e){
      ///  alert("HEEEEEEE");
     // e.preventDefault();
       $.ajax({
        url: "http://localhost:8080/SecondRestApi/company/download"

    });
         //$("#form-id-subscribe")[0].checkValidity(); 
    });

});


