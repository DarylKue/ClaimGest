import React from "react";
import { useEffect } from "react/cjs/react.development";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Affichage from "./components/Affichage";
import Ajouter from "./components/Ajouter";
import ListePays from "./Pages/ListePays";


function App(){
  return(
    <ListePays />
  );
};

export default App;