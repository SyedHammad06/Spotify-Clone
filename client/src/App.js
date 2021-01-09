import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={apiText:""};
  }

  apiReq(){
    fetch("http://localhost:8080/api")
    .then(res=>res.text())
    .then(res=>this.setState({apiText:res}))
    .catch(err=>console.log(err))
  }

  componentDidMount(){
    this.apiReq()
  }

  render() { 
    return ( 
      <div>
        {/* currently this is a test api, will reconfigure depending later on the json context and as the project further improvises */}
        <p>{this.state.apiText}</p>
      </div>
    );
  }
}
export default App;

