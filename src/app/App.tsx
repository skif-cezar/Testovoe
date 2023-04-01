import React from "react";
import {Button} from "./components/buttons/Button";
import {TopButton} from "./components/buttons/TopButton";
import {Card} from "./components/card/Card";
import {Loader} from "./components/loader/Loader";
import {Viewed} from "./components/viewed/Viewed";
import {AdProvider} from "./logic/store/Store";

/**
 * The main component in app
 */
export const App: React.FC = () => {
  return (
    <AdProvider>
      <>
        <Card />
        <Loader />
        <Button text="Показать еще" />
        <Button text="Повторить попытку" />
        <TopButton text="Вверх" />
        <Viewed text="Просмотрено" />
      </>
    </AdProvider>
  );
};
