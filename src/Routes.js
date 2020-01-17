import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Lottery from "./components/Lottery";
import Homepage from "./components/Homepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/homepage" exact component={Homepage} />
        <Route path="/lucky-draw" exact component={Lottery} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
