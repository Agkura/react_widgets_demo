import React from 'react';

class Autocomplete extends React.Component{
  constructor(props){
    super(props);
    this.state = {names: this.props.names.split(" ")};
  }

  handleSearch(event) {
    let targetVal = event.target.value;
    let results = [];
    this.state.names.forEach((name) => {
      if (name.includes(targetVal)){
        results.push(name);
      }
    });
    this.setState({names: results});
  }

  render(){
    return (
      <ul>
        <li>Search</li>
        <li><input id="search-value" onChange={this.handleSearch}></input></li>
        {this.state.names.map((name, idx) => (
          <li key={idx}> {name} </li>
        ))}
      </ul>
    );
  }
}


export default Autocomplete;
