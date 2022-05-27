import React, { useState } from "react";
import axios from "axios";

export default function AjouterPays() {
    const [nomPays, setNomPays] = useState("");
    const [descriptionPays, setDescriptionPays] = useState("");

    function ajoutNom(event) {
        setNomPays(event.target.value);
    }

    function ajoutDescription(event) {
        setDescriptionPays(event.target.value)
    }

    console.log(nomPays);
    console.log(descriptionPays)

    function ajouterPays() {
        axios.post("http://localhost:3001/pays", {
            nomPays,
            descriptionPays
        });

    }


    return (
        <>
            <main class="form-signin w-100 m-auto">
                <form>
                    <div>
                        <button id="title-btn" class="btn btn-lg btn-outline">
                            <h1 class="h3 mb-3 fw-normal">Ajouter un nouveau pays</h1>
                        </button>
                    </div>
                    <div>
                        <input name="nomPays" type="text" class="form-control" id="floatingInput" placeholder="Nom du pays" onChange={ajoutNom} />
                    </div>
                    <div>
                        <input name="descriptionPays" type="text" class="form-control" id="floatingPassword" placeholder="Description du pays" onChange={ajoutDescription} />
                    </div>
                    <div>
                        <button id="btn-left" class="btn btn-lg btn-outline-success" onClick={ajouterPays} type="submit">Ajouter</button>
                        <button id="btn-right" class="btn btn-lg btn-outline-danger" type="reset">Annuler</button>
                    </div>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>

        </>
    )
}