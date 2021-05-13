import axios from "axios";
import React, { useEffect, useState } from "react";
import CocktailCategories from "../components/CocktailCategories";

export type Drinks = {
  drinks: [
    {
      strCategory: string;
    },
    {
      strCategory: string;
    },
    {
      strCategory: string;
    },
    {
      strCategory: string;
    },
    {
      strCategory: string;
    },
    {
      strCategory: string;
    },
    {
      strCategory: string;
    },
    {
      strCategory: string;
    },
    {
      strCategory: string;
    },
    {
      strCategory: string;
    },
    {
      strCategory: string;
    }
  ];
};

export default function CategoriesPage() {
  const [state, setState] = useState<Drinks>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );
      console.log(response.data);
      setState(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {state ? <CocktailCategories drinks={state.drinks} /> : "loading..."}
    </div>
  );
}
