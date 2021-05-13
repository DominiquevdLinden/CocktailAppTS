import { Link } from "react-router-dom";
import { CocktailList } from "../pages/CocktailsPage";

export default function DrinkCard(props: CocktailList) {
  return (
    <div
      style={{ display: "flex", flexFlow: "row wrap", alignItems: "center" }}
    >
      {props.drinks.map((d) => {
        return (
          <div
            key={d.idDrink}
            style={{
              display: "flex",
              width: 250,
              height: 270,
              flexDirection: "column",
              margin: 60,
              padding: 40,
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              transition: "0.3s",
            }}
          >
            <Link to={`/cocktail/${d.idDrink}`}>
              <img
                style={{ width: 250, height: 250 }}
                src={d.strDrinkThumb}
                alt={d.strDrink}
              ></img>
              <p>{d.strDrink}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
