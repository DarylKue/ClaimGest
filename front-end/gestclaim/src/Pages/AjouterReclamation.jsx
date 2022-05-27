import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AjouterReclamation() {
    const [listeMembre, setListeMembre] = useState([]);
    const [codeMembre, setCodeMembre] = useState(0);
    const [montant, setMontant] = useState(0);
    const [dateReclam, setDateReclam] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/membre").then(res => {
            setListeMembre(res.data.data);
        });
    }, []);

    function choixMembre(event) {
        setCodeMembre(event.target.value);
    }

    function ajoutMontant(event) {
        setMontant(event.target.value);
    }

    function ajoutDateReclam(event) {
        setDateReclam(event.target.value);
    }

    function ajouterReclamation() {
        axios.post("http://localhost:3001/reclamation", {
            codeMembre,
            montant,
            dateReclam
        });
    }

    return (
        <>
            <main class="form-signin w-100 m-auto">
                <form>
                    <div>
                        <button id="title-btn" class="btn btn-lg btn-outline">
                            <h1 class="h3 mb-3 fw-normal">Ajouter une nouvelle reclamation</h1>
                        </button>
                    </div>
                    <div>
                        <select class="form-select" onClick={choixMembre}>
                            <option selected>Choisissez un membre</option>
                            {listeMembre.map(function (item) {
                                return (
                                    <option key={item.code_membre} value={item.code_membre}>{item.nom} {item.prenom}</option>)
                            })}
                        </select>
                    </div>
                    <div>
                        <input name="montant" type="text" class="form-control" id="floatingInput" placeholder="Montant de la reclamation" onChange={ajoutMontant} />
                    </div>
                    <div>
                        <input name="dateReclam" type="date" class="form-control" id="floatingPassword" placeholder="Date de la reclamation" onChange={ajoutDateReclam} />
                    </div>
                    <div>
                        <button id="btn-left" class="btn btn-lg btn-outline-success" onClick={ajouterReclamation} type="submit">Ajouter</button>
                        <button id="btn-right" class="btn btn-lg btn-outline-danger" type="reset">Annuler</button>
                    </div>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </>
    )
}
