import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import InspirationPage from "./pages/inspirationPage/InspirationPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/inspiration">
              <InspirationPage/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
          </Switch>
          <Footer/>
        </>
    );
}

export default App;
