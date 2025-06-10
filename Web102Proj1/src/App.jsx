import React from "react";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Community Events Board</h1>
        <p>Discover upcoming events in your community!</p>
      </header>
      <CardList />
    </div>
  );
}

export default App;