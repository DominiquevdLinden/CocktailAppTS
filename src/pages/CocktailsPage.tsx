import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DrinkCard from "../components/DrinkCard";

export type Cocktail = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export type CocktailList = {
  drinks: Cocktail[];
};

export default function CocktailsPage() {
  const [state, setState] = useState<CocktailList>();

  const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";
  const category = useParams<{ id: string }>();
  const categoryNoSpace = category.id.replace(/ /g, "_");
  const encodedCategory = encodeURIComponent(categoryNoSpace);
  const completeUrl = baseUrl + encodedCategory;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(completeUrl);
      setState(response.data);
    };
    fetchData();
  }, [category.id]);

  return (
    <div>{state ? <DrinkCard drinks={state.drinks} /> : "loading..."}</div>
  );
}
