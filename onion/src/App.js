import logo from './logo.png';
import './App.css';
import SearchBar from './Components/SearchBar';
import React from 'react'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      database : []
    }
  }

  componentDidMount(){
    this.updateDatabase()
  }

  updateDatabase = () =>{
    fetch('http://127.0.0.1:5000/recipes')
    .then((response) => response.json()
    .then((database) => (this.setState({database : database}))))
  }

  // searchDatabase = (search) =>{
  //   fetch('http://127.0.0.1:5000/search/${search}')
  //   .then((response) => response.json()
  //   .then(()))
  // }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* Get a new logo because copyright bullshit */}
          <img src={logo} className="App-logo" alt="logo" /> 
          <p>
            What's cooking good looking
          </p>

          <SearchBar placeholder={"Let's get cooking..."} data = {this.state.database}/>
          
          
        </header>
      </div>
    );
}
}

export default App;
