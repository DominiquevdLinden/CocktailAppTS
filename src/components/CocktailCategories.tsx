import { Drinks } from "../pages/CategoriesPage";
import { Link } from "react-router-dom";

export default function CocktailCategories(props: Drinks) {
  return (
    <div>
      {props.drinks.map((d, index) => {
        return (
          <Link key={index} to={`/category/${d.strCategory}`}>
            <h1>{d.strCategory}</h1>
          </Link>
        );
      })}
    </div>
  );
}
