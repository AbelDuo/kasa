import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import bannerImg from "../assets/images/IMG.png";
import CardsList from "../components/CardsList";
import Footer from "../components/Footer";



const Accueil = () => {
    return (
        <main>
        <Header />
        <Banner imageSrc={bannerImg} text="Chez vous, partout et ailleurs" />
        <CardsList/>
        <Footer/>
        </main>
        
    )
};

export default Accueil;