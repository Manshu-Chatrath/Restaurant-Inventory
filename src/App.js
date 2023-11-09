import React from "react";
import Login from "./Pages/Login";
import Signup from "./Pages/signup";
import { Route, Router, Redirect } from "react-router-dom";
import { isExpired } from "react-jwt";

import history from "./Components/history";

import main from "./Pages/main";
import form from "./Components/form";
import View from "./Pages/view";
import Extra from "./Pages/extra";
import Edit from "./Pages/Edit-extra";
const App = () => {
  return (
    <>
      <Router history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        {!isExpired(localStorage.getItem("token")) ? (
          <>
            <Redirect from="*" to="/main" />
            <Route path="/main" exact component={main} />
            <Route path="/new-dish" exact component={form} />
            <Route path="/view/:id" exact component={View} />
            <Route path="/add-extra/:id" exact component={Extra} />
            <Route path="/edit-dish/:id" exact component={form} />
            <Route path="/edit-category/:id" exact component={Edit} />
          </>
        ) : (
          <>
            <Redirect to="/" />
          </>
        )}
      </Router>
    </>
  );
};
export default App;
