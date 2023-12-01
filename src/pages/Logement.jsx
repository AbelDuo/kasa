import React, { useEffect, useState } from "react";
import ItemsData from "../data.json";
import { useParams } from "react-router-dom";
import "../styles/Logement.scss";
import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/Slideshow";
import Tags from "../components/Tags/Tags";
import Host from "../components/Host/Host";
import Collapse from "../components/Collapse/Collapse";
import Footer from "../components/Footer/Footer";
import Erreur from "../pages/Erreur";

const Logement = () => {
  const { id } = useParams(); /* Récupérer l'ID de l'article depuis l'URL */
  const [housing, setHousing] = useState(null);

  useEffect(() => {
    const selectedHousing = ItemsData.find((item) => item.id === id);
    console.log(selectedHousing);
    setHousing(selectedHousing);
  }, [id]);

  if (!housing) {
    return (
      <>
        <Erreur/>
      </>
    );
  }
  const { pictures, rating, tags, description, equipments } = housing;
  const {
    host: { name, picture },
  } = housing;
  const [firstName, lastName] = name.split(" ");

  return (
    <>
      <Header />
      <main className="housing-main">
        <Slideshow images={pictures} />
        <section className="housing-header">
          <div className="housing-info">
            <h1 className="housing-title">{housing.title}</h1>
            <p className="housing-location">{housing.location}</p>
            <Tags tags={tags} />
          </div>
          <Host rating={rating} firstName={firstName} lastName={lastName} picture={picture} />
        </section>
        <section className="housing-collapse">
          <Collapse title="Description">
            <p>{description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul className="equipments-content">
              {equipments.map((equipment,index) => {
                return <li key={index}>{equipment}</li>;
              })}
            </ul>
          </Collapse>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Logement;