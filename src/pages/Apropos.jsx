import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import aboutBanner from "../assets/images/aproposIMG.png";
import Collapse from "../components/Collapse";
import collapsesData from "../collapsesData.json";
import Footer from "../components/Footer";

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
            <Collapse title={collapse.title} key={collapse.title}>
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