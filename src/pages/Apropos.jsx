import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import aboutBanner from "../assets/images/aproposIMG.png";
import Footer from "../components/Footer"


const Apropos = () => {

  
    return (
      <>
        <Header />
        <main className="main">
          <Banner imageSrc={aboutBanner} text="" />
          
        <Footer />
        </main>    
    </>
    );
  };


  export default Apropos;