import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state={
    name:undefined,
    age:undefined,
    belt:undefined,
    id:null
  }
  handleClick = (e)=>{
    console.log(e.target.name);
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state);
    this.setState({id:Math.random()*5})
    this.props.addNinja(this.state);
  }
  render(){


    return(
      <div>
      <form onSubmit={ this.handleSubmit }>
      <input type="text" name="name" onChange={this.handleClick}/>
      <input type="number" name="age" onChange={this.handleClick}/>
      <input type="text" name="belt" onChange={this.handleClick}/>
      <button type="submit" > submit</button>
      </form>
      </div>
    )
  }
  }
export default App
