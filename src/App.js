import React, { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import AgentList from "./components/AgentList";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutAgent from "./components/AboutAgent";

const App = () => {
  const [agents, setAgents] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const FetchData = async () => {
      const baseURL =
        "https://valorant-api.com/v1/agents/?isPlayableCharacter=true";
      const response = await axios.get(baseURL);
      const data = response.data;
      setAgents(data.data);
    };
    FetchData();
  }, []);

  const searchMovie = (event) => {
    setSearchQuery(event.target.value);
  };

  let filteredAgents = agents.filter((agent) => {
    return (
      agent.displayName.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );
  });
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <div className="container" style={{ maxWidth: "1000px" }}>
                <br />
                <div className="row">
                  <div className="col-12">
                    <h1 className="text-center">Valorant Wikipedia</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Searchbar searchMovie={searchMovie} />
                  </div>
                </div>
                <AgentList agents={filteredAgents} />
              </div>
            </React.Fragment>
          }
        ></Route>
        <Route path="/agents/:id" element={<AboutAgent />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
