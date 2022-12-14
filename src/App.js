import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import AgentList from './components/AgentList';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutAgent from './components/AboutAgent';

 class App extends Component {

state = {
  agents :  [
     
    ],
    searchQuery:""
  }


  async componentDidMount() {
    const baseURL ="https://valorant-api.com/v1/agents/?isPlayableCharacter=true"
    const response =await  axios.get(baseURL);
    const data = await response.data;
    //console.log(data.data)
    this.setState({agents : data.data})
    
  }

  searchMovie = (event)=> {
    this.setState({searchQuery : event.target.value})
  }

  render() {

    let filteredAgents = this.state.agents.filter((agent)=>{
      return agent.displayName.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1;
    })
    return (
      <Router>
        <Routes>
          <Route path='/' element={
            <React.Fragment>
            <div className="container" style={{maxWidth:"1000px"}}>
            <br />
            <div className="row">
              <div className="col-12">
                <h1 className='text-center'>Valorant Wikipedia</h1>
              </div>
            </div>
              <div className="row">
                <div className="col-12">
                <Searchbar searchMovie = {this.searchMovie}/>
                </div>
              </div>
              <AgentList agents = {filteredAgents}/>
            </div>
            </React.Fragment>
          }></Route>
          <Route path='/agents/:id' element={<AboutAgent/>}></Route>

  </Routes>
  </Router>
    );
  }
}

export default App;