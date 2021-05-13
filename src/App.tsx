import "./App.css";
import { Switch, Route } from "react-router";
import CategoriesPage from "./pages/CategoriesPage";
import { BrowserRouter } from "react-router-dom";
import CocktailsPage from "./pages/CocktailsPage";
import CocktailDetailPage from "./pages/CocktailDetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/cocktail/:id" component={CocktailDetailPage} />
          <Route path="/category/:id" component={CocktailsPage} />
          <Route path="/" component={CategoriesPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
