import React from 'react';
import Ninja from "./ninjs.js"
import ReactDOM from 'react-dom';
import AddNinja from './addninja.js'

class App extends React.Component {
  state={
    ninjas:[{ name:"leo",age:34,belt:"black",id:1},
           { name:"rio",age:45,belt:"red",id:2},
           { name:"lancelot",age:21,belt:"pink",id:3}
    ]
  }
  addNinjaToList =(item)=>{
    var ninjas = this.state.ninjas;
    ninjas = [...ninjas,item];
    this.setState({ninjas});

  }
  deleteNinja = (id)=>{
    var ninjas = this.state.ninjas;
    ninjas= ninjas.filter((item)=>{
      return(id!=item.id);
    })
    this.setState({ninjas});
  }
  render(){

  return (
    <div className="App">
      <div >
      hello ji,
      my self tony
      <br/>
      < Ninja ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
      < AddNinja addNinja={this.addNinjaToList}/>
      </div>
    </div>
  );
};
}

export default App;
