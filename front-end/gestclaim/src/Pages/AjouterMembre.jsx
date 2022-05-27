import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AjouterMembre() {
    const [listePays, setListePays] = useState([]);
    const [codePays, setCodePays] = useState(0);
    const [nomMembre, setNomMembre] = useState("");
    const [prenomMembre, setPrenomMembre] = useState("");
    const [dateNaiss, setDateNaiss] = useState("");
    const [descriptionMembre, setDescritptionMembre] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/pays").then(res => {
            setListePays(res.data.data);
        });
    }, []);

    function choixPays(event) {
        setCodePays(event.target.value);
    }

    function ajoutNom(event) {
        setNomMembre(event.target.value);
    }

    function ajoutPrenom(event) {
        setPrenomMembre(event.target.value);
    }

    function ajoutDateNaiss(event) {
        setDateNaiss(event.target.value);
    }

    function ajoutDescriptionMembre(event) {
        setDescritptionMembre(event.target.value);
    }

    function ajouterMembre() {
        axios.post("http://localhost:3001/membre", {
            codePays,
            nomMembre,
            prenomMembre,
            dateNaiss,
            descriptionMembre
        });
    }


    return (
        <>
            <main class="form-signin w-100 m-auto">
                <form>
                    <div>
                        <button id="title-btn" class="btn btn-lg btn-outline">
                            <h1 class="h3 mb-3 fw-normal">Ajouter un nouveau membre</h1>
                        </button>
                    </div>
                    <div>
                        <select class="form-select" onClick={choixPays}>
                            <option selected>Choisissez un pays</option>
                            {listePays.map(function (item) {
                                return (
                                    <option key={item.code_pays} value={item.code_pays}>{item.nom}</option>)
                            })}
                        </select>
                    </div>
                    <div>
                        <input name="nomMembre" type="text" class="form-control" id="floatingInput" placeholder="Nom du membre" onChange={ajoutNom} />
                    </div>
                    <div>
                        <input name="prenomMembre" type="text" class="form-control" id="floatingPassword" placeholder="Prenom du membre" onChange={ajoutPrenom} />
                    </div>
                    <div>
                        <input name="dateNaiss" type="date" class="form-control" id="floatingPassword" placeholder="Date de naissance du membre" onChange={ajoutDateNaiss} />
                    </div>
                    <div>
                        <input name="descriptionMembre" type="text" class="form-control" id="floatingPassword" placeholder="Description du membre" onChange={ajoutDescriptionMembre} />
                    </div>
                    <div>
                        <button id="btn-left" class="btn btn-lg btn-outline-success" onClick={ajouterMembre} type="submit">Ajouter</button>
                        <button id="btn-right" class="btn btn-lg btn-outline-danger" type="reset">Annuler</button>
                    </div>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>

        </>
    )
}