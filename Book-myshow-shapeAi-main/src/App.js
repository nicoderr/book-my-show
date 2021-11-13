import React from "react";
import HomePage from "./pages/HomePage";
import axios from "axios";


// import { Route,Switch } from "react-router-dom";
import DefaultHOC from "./Componenets/HOC/DefaultHOC";
import MovietHOC from "./Componenets/HOC/MovieHOC";
import MoviePage from "./pages/MoviePage";
import PlaysPage from "./pages/PlaysPage";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params= {};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovietHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={PlaysPage} />
    </>
  );
}

export default App;
