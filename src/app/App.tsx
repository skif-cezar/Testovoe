import React from "react";
import GlobalStyles from "src/app/global";
import {AdsPage} from "src/app/logic/pages/ads-page/AdsPage";
import {AdProvider} from "src/app/logic/store/Store";

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
