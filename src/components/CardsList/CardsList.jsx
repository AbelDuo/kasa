
import Cards from "../Cards/Cards.jsx";
import ItemsData from "../../data.json";
import "../CardsList/CardsList.scss";

const CardsList = () => {

  return (
    <section className="cards-container">
      {ItemsData.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CardsList;