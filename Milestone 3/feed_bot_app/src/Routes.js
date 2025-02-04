import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Forms,
  Triggers,
  Analysis,
  About,
  Settings,
  Graphs,
  Chat
} from "./components";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Forms} />
    <Route path="/triggers" component={Triggers} />
    <Route path="/analysis" component={Analysis} />
    <Route path="/report/:courseId" component={Graphs} />
    <Route path="/about" component={About} />
    <Route path="/settings" component={Settings} />
    <Route path="/chat" component={Chat} />
  </Switch>
);

export default Routes;
