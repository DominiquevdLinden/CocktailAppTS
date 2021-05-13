import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CocktailsPage() {
  const [state, setState] = useState<any>();

  const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const category = useParams<{ id: string }>();
  const categoryNoSpace = category.id.replace(/ /g, "_");
  const encodedCategory = encodeURIComponent(categoryNoSpace);
  const completeUrl = baseUrl + encodedCategory;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(completeUrl);
        setState(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [category]);

  console.log(state);

  return (
    <div>
      {state
        ? state.drinks.map((d: any, index: number) => {
            return (
              <div key={index}>
                <h1>{d.strDrink}</h1>
                <img src={d.strDrinkThumb} alt={d.strDrink}></img>
              </div>
            );
          })
        : "loading..."}
    </div>
  );
}
