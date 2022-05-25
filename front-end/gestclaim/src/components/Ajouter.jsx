import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";

function Ajouter() {
    return (<Router>
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

    </Router>)
}

function Pays() {
    return (
        <div>
            <main class="form-signin w-100 m-auto">
                <form>
                    <h1 class="h3 mb-3 fw-normal">Ajouter un pays</h1>

                    <div>
                        <input type="text" class="form-control" id="floatingInput" placeholder="nom du pays" />
                    </div>
                    <div>
                        <input type="text" class="form-control" id="floatingPassword" placeholder="description du pays"/>
                    </div>

                    <button class="w-100 btn btn-lg btn-primary" type="submit">Ajouter</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>

        </div>
    );
}

function Membre() {
    return (<div>
        <main class="form-signin w-100 m-auto">
            <form>
                <h1 class="h3 mb-3 fw-normal">Ajouter un membre</h1>

                <div>
                    <input type="text" class="form-control" id="floatingInput" placeholder="code du pays"/>
                </div>
                <div>
                    <input type="text" class="form-control" id="floatingPassword" placeholder="nom du membre"/>
                </div>
                <div>
                    <input type="text" class="form-control" id="floatingPassword" placeholder="prenom du membre"/>
                </div>
                <div>
                    <input type="text" class="form-control" id="floatingPassword" placeholder="date de naissance du membre"/>
                </div>
                <div>
                    <input type="text" class="form-control" id="floatingPassword" placeholder="description du membre"/>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Ajouter</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
        </main>

    </div>)
}

function Reclamation() {
    return (<div>
        <main class="form-signin w-100 m-auto">
            <form>
                <h1 class="h3 mb-3 fw-normal">Ajouter une reclamation</h1>

                <div>
                    <input type="text" class="form-control" id="floatingInput" placeholder="nom du pays"/>
                </div>
                <div>
                    <input type="text" class="form-control" id="floatingPassword" placeholder="description du pays"/>
                </div>
                <div>
                    <input type="text" class="form-control" id="floatingPassword" placeholder="description du pays"/>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Ajouter</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
        </main>

    </div>)
}

export default Ajouter;