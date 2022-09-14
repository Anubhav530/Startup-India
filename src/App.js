// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/header";
import About from "./components/About/about";
import Startup from "./components/startup/startup";
import SignUp from "./components/SignUp/signup";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/Home.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <div style={{ display: "block" }}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <>
                  <Home />
                  
                </>
              }}
            ></Route>
            <Route
              exact
              path="/about"
              render={() => {
                return (
                  <>
                    <About />
                    <Footer />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/ideas"
              render={() => {
                return (
                  <>
                    <Startup />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/register"
              render={() => {
                return (
                  <>
                    <SignUp />
                  </>
                );
              }}
            ></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
