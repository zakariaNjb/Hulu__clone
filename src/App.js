import React,{ createContext, useEffect} from "react";
import './App.css';
import Hulu from "./Pages/Hulu/Hulu";
import {StateFct} from "./Hooks/StateFct";
import {urls} from "./API/links";

export const Context=createContext();

function App() {
  //movies state
  const {state,fetchApi}=StateFct();
  
  useEffect(()=>{
    fetchApi(urls.topRated);
  },[]);

  return (
    <div className="App">
      <Context.Provider value={{fetchMovies:fetchApi}}>
        <Hulu movies={state.results}/>
      </Context.Provider>
    </div>
  );
}
export default App;
