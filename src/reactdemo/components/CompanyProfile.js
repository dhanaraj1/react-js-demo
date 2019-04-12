import React from 'react';

class CompanyProfile extends React.Component {
  
  constructor(props) {
            super(props);
            
      };
   render(){  return(
    <div id="company-parent-id" className="popover-slider">
    
      <div className="panel panel-primary">
         <div className="panel-heading">About Us</div>
            <div className="panel-body scroll-panel">
                <p>TechforceInfotech was founded in 2010 by the team of technical experts. Today due to great methods and research of technical experts the team has achieved the vast height in it sector and still the result counts.</p>
                <p>Our Team has better understanding of the task to be performed and also have been the great experience in serving IT Services and gaining the maximum satisfaction from the client over the globe. We have worked with various US and Indian based clients. We have worked on various domains like government, legal, entertainment, education, hospitality etc. We work with latest technologies and always provide a solution which helps to satisfy rapidly changing client needs as per the new technologies and trends.</p>
            </div>

              <div className="panel-footer">
                    <form action="http://localhost:8080/SecondRestApi/company/download" id = "form-id-subscribe" method="POST">
                      <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
                       <div><button type="submit" onClick={this.onClick} id="btn-id-subscribe"className="btn btn-success">Subscribe</button></div>
                 </form>
              </div>
            
     </div>
    
    
    </div>
    );}
    onClick(event){
        console.log("sdfdsfsd");
    };

}

export default CompanyProfile;