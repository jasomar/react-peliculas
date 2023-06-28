import React, { useState } from "react";

import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";

import MovieSource from "./api/MovieSource";

function App() {
  const [state,setState] = useState({
    results : []
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get("/",{
      params:{
        s:text,
        i:"tt3896198",
        apiKey:"51e4402b"
      }
    })
    setState(prevState => {
      return{...prevState, results:results}
    })
  }

    //http://www.omdbapi.com/?i=tt3896198&apikey=51e4402b

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered"> Movies</h2>
      </div>
      <SearchBar onSearch={onSearch}/>
      <CardList results={state.results} />
    </div>
  );
}

export default App;
