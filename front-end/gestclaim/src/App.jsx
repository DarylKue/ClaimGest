import React from "react";
import { useEffect } from "react/cjs/react.development";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import ListePays from "./Pages/ListePays";
import ListeMembre from "./Pages/ListeMembre";
import ListeReclamation from "./Pages/ListeReclamation";
import AjouterPays from "./Pages/AjouterPays";
import AjouterMembre from "./Pages/AjouterMembre";
import AjouterReclamation from "./Pages/AjouterReclamation";


function App(){
  return(
    <>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element = {<ListePays />}/>
          <Route exact path="/ListeMembre" element = {<ListeMembre />}/>
          <Route exact path="/ListeReclamation" element = {<ListeReclamation />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;