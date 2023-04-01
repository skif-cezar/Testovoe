import React from "react";
import {Button} from "./components/buttons/Button";
import {TopButton} from "./components/buttons/TopButton";
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
      <Button text="Показать еще" />
      <Button text="Повторить попытку" />
      <TopButton text="Вверх" />
    </>
  );
};
