import React, { useEffect, useState } from "react";
import ItemsData from "../data.json";
// import "../styles/Logement.css";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Logement = () => {
    const {id}= useParams;
    const [housing,setHousing]= useState(null);

    useEffect(()=>{
        const selectedHousing = ItemsData.find((item) =>item.id=== id);
        setHousing(selectedHousing);
    }, [id]);

const {description, equipements}=housing;
return(
    <>
    <Header/>
    <main className="logement-main">
        <Collapse title="Description">
            <p>{description}</p>
        </Collapse>
        <Collapse title="Équipements">
            <ul className="equipements-content">
                {equipements.map((equipment)=> {
                    return <li>{equipment}</li>;
                })}
            </ul>
        </Collapse>
    </main>
    <Footer/>
    </>
);
};

export default Logement;