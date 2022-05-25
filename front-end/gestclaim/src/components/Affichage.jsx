import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';



function Affichage() {
    return (
        <Router>
            <div>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand">GestClaim</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/pays">Pays</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/membre">Membres</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/reclamation">Reclamation</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/pays' element={<Pays />} />
                    <Route path='/membre' element={<Membre />} />
                    <Route path='/reclamation' element={<Reclamation />} />
                </Routes>
            </div>

        </Router>
    )
}



function Pays() {
    const [listePays, setListePays] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/pays").then((getData) => {
            setListePays(getData.data);
        });
    });

    console.log(listePays);

    return (
        <div>           
         {listePays.map((data) => {
            return (<div>
                <table class="table" style={{ textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th scope="col">Numero</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">{data.code_pays}</th>
                            <td>{data.nom}</td>
                            <td>{data.description_pays}</td>

                        </tr>
                    </tbody>
                </table>
            </div>);
        })}
        </div>

    )



}

function Membre() {
    return (<div>
        <table class="table" style={{ textAlign: "center" }}>
            <thead>
                <tr>
                    <th scope="col">Numero</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>)
}

function Reclamation() {
    return (<div>
        <table class="table" style={{ textAlign: "center" }}>
            <thead>
                <tr>
                    <th scope="col">Numero</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>)
}

export default Affichage;