import React, { Fragment, useEffect } from "react";
import Navbar from "./components/Layout/Navbar";
import Landing from "./components/Layout/Landing";

import Alert from "./components/Layout/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

//Redux
import { Provider } from "react-redux"; //Used to connect redux with the react app
import store from "./store";

const App = () => {
  return (
    <div className="main-container">
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />

            <section className="container">
              <Alert />
              <Route exact path="/" component={Landing} />
            </section>
          </Fragment>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
