import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";

export default function ListePays(){
    const [listePays, setListePays] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/pays").then(res => {
            setListePays(res.data);
        });
    },[]);

    return (
        <>
            <div>ListePays</div>
            <div>
                {listePays.map(function(item){
                    return (
                        <h1>{item.nom}</h1>
                    )
                })}
            </div>
        </>
    )
}