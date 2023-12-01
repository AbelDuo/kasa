import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import bannerImg from "../assets/images/IMG.png";
import CardsList from "../components/CardsList/CardsList";
import Footer from "../components/Footer/Footer";



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