import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render(){
  var ninjas = this.props.ninjas;
  if(ninjas.length==0)
  {
    var ninjaDiv = "no to do left today";
  }
  else{
  var ninjaDiv =  ninjas.map((ninja)=>{
    return(
      <div className="ninja" key= { ninja.id}>
      name:{ninja.name}
      <br/>
      age:{ninja.age}
      <br/>
      belt:{ninja.belt}
      <br/>
      <button onClick={ ()=>{ this.props.deleteNinja(ninja.id)} } >delete</button>

      </div>
    )
  })
};
  return (
    <div className="App">
      <div >
       { ninjaDiv}
      </div>
    </div>
  );
}
}
export default App;
