import React from 'react';
import ReactDOM from 'react-dom';
import TotalClientContainer from './TotalClientContainer'
import { BrowserRouter } from 'react-router-dom'
//import { withRouter } from 'react-router-do'; 



/*function TotalClinentRendrer(props){
    console.log(props);
    return(<TotalClientContainer />);
}*/

//ReactDOM.render((<BrowserRouter><TotalClientContainer /></BrowserRouter>), document.getElementById('root'));
//.render(<TotalClientContainer />,document.getElementById('root'));
//const TotalClinentRendrer = () => (<TotalClientContainer />)
class TotalClinentRendrer extends React.Component {
    render() {
    // This syntax ensures `this` is bound within handleClick
    return (
     <TotalClientContainer />
    );
  }
}


export default  TotalClinentRendrer;