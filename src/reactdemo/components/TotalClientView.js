import React from 'react';

function TotalClientView(props) {
    console.log(props);
    props.getClients;
   
  return (
  <header id="header">
    <div>
     <section id="bakavas" className ="body_background">
        <div className="container">
            <div className="grid-stack grid-stack-instance-4316" data-gs-width="12" data-gs-animate="yes">
                <div className="grid-stack-item " data-gs-x="0" data-gs-y="0" data-gs-width="2" data-gs-height="2">
                    <div className="grid-stack-item-content">Hello
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
    </header>
  );
}

export default TotalClientView;