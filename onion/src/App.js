import logo from './logo.png';
import './App.css';
import SearchBar from './Components/SearchBar';
import React from 'react'

class App extends React.Component{

  listOfTitles = [
    "What are we making today?",
    "Feeling Saucy?",
    "Chat! Let. Them. COOK!",
    "Breakfast, Lunch, Dinner! We got em all!",
    "Midnight snack? Na, just an early breakfast",
    "Breakfast Dinner! Dinner Breakfast!",
    "[Insert Text Here]",
    "Not to be confused with the journal..."
  ];

  changeTitle = () =>{


    let int = Math.floor(Math.random() * this.listOfTitles.length)

    this.setState({title: this.listOfTitles[int]})
    
    // generate a random number, find that sentence, then return the sentance
  }


  constructor(props){
    super(props);
    this.state = {
      database : [],
      title : "Damn, that's crazy"
    }
  }

  componentDidMount(){
    this.updateDatabase()
    this.changeTitle()
  }

  updateDatabase = () =>{
    fetch('http://192.168.50.228:5000/recipes')
    .then((response) => response.json()
    .then((database) => (this.setState({database : database}))))
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* Get a new logo because copyright bullshit */}
          <img src={logo} className="App-logo" alt="logo" /> 
          <p>
            {this.state.title}
          </p>
        </header>

        <SearchBar placeholder={"Let's get cooking..."} data = {this.state.database}/>
        
      </div>
    );
}
}

export default App;
