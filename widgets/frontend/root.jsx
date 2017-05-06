import React from 'react';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

let names = "David Vu Bob";

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="main">
        <ul>
          <li><Clock /></li>
          <li><Weather /></li>
          <li><Autocomplete names={names}/></li>
        </ul>
      </div>
    );
  }
}

export default Root;
