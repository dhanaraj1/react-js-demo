import React from 'react';
import TeamDetailConstant from '../constants/TeamDetailConstant'

const divStyle = {
  color: 'black',
  marginTop: "1px",
  //style={{ marginTop: `${window.innerHeight}px` }}
};

function TeamDetailView(props) {
    props.getTeamData(1);
  
  return(
    

                    <div className="grid-stack-item-content">
                        Meet our team
                          <div className="box-down">
            <div className="row">
                {props.teamData.map(function(teamData, index){
                    return <div className="col-lg-3" ><img className="img-circle" alt="Cinque Terre" width="90" height="90"
                        src={TeamDetailConstant.IMAGE_PATH + teamData.memberPhoto}  ></img>
                        <div style={divStyle}>{teamData.memberName}</div></div>
                  })}
          </div>
        </div>           
                    </div>
             
  
  );
}

export default TeamDetailView