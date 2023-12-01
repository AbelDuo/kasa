import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import aboutBanner from "../assets/images/aproposIMG.png";
import Collapse from "../components/Collapse/Collapse";
import collapsesData from "../collapsesData.json";
import Footer from "../components/Footer/Footer";

const Apropos = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(collapsesData);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Banner imageSrc={aboutBanner} text="" />
        <section className="collapses-container">
          {info.map((collapse) => (
            <Collapse width="90%"title={collapse.title} key={collapse.title}>
              <p>{collapse.content}</p>
            </Collapse>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Apropos;