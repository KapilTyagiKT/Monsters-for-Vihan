import react from 'react';
import {Route, Link} from 'react-router-dom' ;

import './App.css';

const HomePage = (props)=> {
  console.log(props);
    return ( 
      <div>
        <h1> This is Home Page</h1>
        <button onClick = {()=>props.history.push('/Topics/12')}>Button for TopicId</button>
      </div>
  ) ;
  };

const TopicsList = (props) => {
  console.log(props);

  return(
    <div>
    <h1>  This is Topic List Page</h1>
  </div>
  ) ;
};
  

const TopicDetails = (props) => {
  console.log(props);
  return (
    <div>
      <h1>  This is Topic Details Page:{props.match.params.topicId} </h1>
    </div>
  );
};

function routerTutorial() {
  return (
    <div>
        <Link to='Topics'>TopicsLink</Link>
        <Route exact path ='/' component = {HomePage} />
        <Route exact path ='/Topics' component = {TopicsList} />
        <Route pexact path = '/Topics/:topicId' component = {TopicDetails} />

      
        
            
    </div>
  );
}

export default RouterTutorial;