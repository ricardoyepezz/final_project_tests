import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./component/People";
import { Planets } from "./component/Planets";
import { PeopleDetail } from "./component/PeopleDetail";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/people/:id">
            <PeopleDetail  />
          </Route>
          <Route exact path="/planets">
            <Planets />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
