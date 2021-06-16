import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list'
import {SearchBox} from './components/search-box/search-box'



import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
        
    }
  }


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  
  .then(data=>this.setState({monsters:data}))
  
  
}


  render() {
    const { monsters,searchField }=this.state;
    const fliteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      
      )
    return (
      <div className="App">
      <h1> Monster Robots</h1>
         <SearchBox
         placeholder="search monsters"
         handleChange={e=>this.setState({ searchField:e.target.value })}
         />
        <CardList monsters={fliteredMonsters} >
   
        </CardList>
       
      </div>
    );
  }
}

export default App;
