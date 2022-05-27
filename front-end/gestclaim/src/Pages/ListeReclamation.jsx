import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function ListeReclamation() {
    const [listeReclamation, setListereclamation] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/membre").then(res => {
            setListereclamation(res.data.data);
        });
    }, []);

    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <table class="table" style={{ textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th scope="col">Id de la reclamation</th>
                            <th scope="col">Montant</th>
                            <th scope="col">Date de reclamation</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {listeReclamation.map((item) => {
                            return (<tr>
                                <th scope="row">{item.code_reclam}</th>
                                <td>{item.montant}  FCFA</td>
                                <td>{item.dateReclam}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}