import "./App.css";
import { Switch } from "react-router-dom";
import HomePage from "./LayoutComponents/HomePage";
import { Route } from "react-router-dom";
import ProductListPage from "./Components/ProductListPage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import ProductPages from "./Components/ProductPages";
import SignupForm from "./Components/Signup";
import LoginForm from "./Components/LoginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Router } from "react-router-dom";
import { verifyToken } from "./Redux/actions/userActions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./Redux/actions/globalActions";
import ShoppingCartPage from "./Components/ShoppingCartPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop/:id/:gender/:title" exact>
          <ProductListPage />
        </Route>
        <Route path="/Contact" exact>
          <ContactPage />
        </Route>
        <Route path="/AboutPage" exact>
          <AboutPage />
        </Route>
        <Route path="/:categoryId/:productId/:productNameSlug" exact>
          <ProductPages />
        </Route>
        <Route path="/Signup">
          <SignupForm />
        </Route>
        <Route path="/Login">
          <LoginForm />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCartPage />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
