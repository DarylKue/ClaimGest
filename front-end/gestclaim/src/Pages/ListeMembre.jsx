import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function ListeMembre() {
    const [listeMembre, setListeMembre] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/membre").then(res => {
            setListeMembre(res.data.data);
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
                            <th scope="col">Id du membre</th>
                            <th scope="col">Nom </th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Date de naissance</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {listeMembre.map((item) => {
                            return (<tr>
                                <th scope="row">{item.code_membre}</th>
                                <td>{item.nom}</td>
                                <td>{item.prenom}</td>
                                <td>{item.dateNaiss}</td>
                                <td>{item.description_membre}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}