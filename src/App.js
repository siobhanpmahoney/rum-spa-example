import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Page from "./components/Page";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          path="/start"
          render={() => {
            return <Page title="Start" />;
          }}
        />

        <Route
          path="/middle"
          render={() => {
            return <Page title="Middle" />;
          }}
        />

        <Route
          path="/last"
          render={() => {
            return <Page title="Last" />;
          }}
        />
      </Switch>
    </div>
  );
}
