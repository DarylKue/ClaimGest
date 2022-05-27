import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function ListePays() {
    const [listePays, setListePays] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/pays").then(res => {
            setListePays(res.data.data);
        });
    }, []);

    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <div>
                    <table class="table" style={{ textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">Numero</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {listePays.map(function (item) {
                                return (
                                    <tr>
                                        <th scope="row">{item.code_pays}</th>
                                        <td>{item.nom}</td>
                                        <td>{item.description_pays}</td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}