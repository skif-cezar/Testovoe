import React from "react";
import GlobalStyles from "src/app/global";
import {AdsPage} from "./logic/pages/ads-page/AdsPage";
import {AdProvider} from "./logic/store/Store";

/**
 * The main component in app
 */
export const App: React.FC = () => {
  return (
    <AdProvider>
      <>
        <AdsPage />
        <GlobalStyles />
      </>
    </AdProvider>
  );
};
