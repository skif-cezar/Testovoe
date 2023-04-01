import React from "react";
import {Card} from "./components/card/Card";
import {Loader} from "./components/loader/Loader";

/**
 * The main component in app
 */
export const App: React.FC = () => {
  return (
    <>
      <Card />
      <Loader />
    </>
  );
};
