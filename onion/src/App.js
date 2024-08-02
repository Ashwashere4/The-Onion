import logo from './logo.png';
import './App.css';
import SearchBar from './Components/SearchBar';
import React from 'react'
import AdminModal from './Components/AdminModal';
// import Button from '@mui/material/Button';

const ip = '127.0.0.1'


class App extends React.Component{


  listOfTitles = [
    "What are we making today?", "Feeling Saucy?", "Chat! Let. Them. COOK!",
    "Breakfast, Lunch, Dinner! We got em all!", "Midnight snack? Na, just an early breakfast",
    "Breakfast Dinner! Dinner Breakfast!", "[Insert Text Here]",
    "Not to be confused with the journal...", "Winner Winner, Chicken Dinner!","Lettuce romaine friends.", 
    "I’m on a seafood diet. I see food and I eat it.", "You’re the apple of my eye.", "This is un-bear-ably good.", 
    "I doughnut care.", "You’re bacon me crazy.", "Life is gouda.", "I cannoli be happy when I’m with you.", 
    "You’ve got to be buttering me up!", "I relish the thought of being with you."
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
    fetch('http://' + ip + ':5000/recipes')
    .then((response) => response.json()
    .then((database) => (this.setState({database : database}))))
  }

  deleteRecipe = (primaryid) => {
    fetch('http://' + ip + `/recipes/${primaryid}`, {method: "DELETE"})
    window.location.reload()
  }

  addRecipe = (addName, addURL, addTags) => {

    console.log(addName, addURL, addTags)
    fetch(`http://` + ip + `/recipes/add`, {method: "PUT", headers: {'Content-Type' : 'application/json'}, body: JSON.stringify({
      recipe: addName,
      url: addURL,
      tags: addTags
    })}).then(window.location.reload())
    
    }

  updateRecipe = (primaryid, updateName, updateURL, updateTags) => {

    fetch('http://' + ip + `:5000/recipes/${primaryid}`, {method: "PUT", headers: {'Content-Type' : 'application/json'}, body: JSON.stringify({
      recipe: updateName,
      url: updateURL,
      tags: updateTags
    })}).then(window.location.reload())
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <AdminModal deleteButton = {this.deleteRecipe} addButton = {this.addRecipe} updateButton = {this.updateRecipe}/>
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
