import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GlobalStyles from "src/app/global";
import {AdsPage, MAIN_PAGE_PATH} from "src/app/logic/pages/ads-page/AdsPage";
import {AdProvider} from "src/app/logic/store/Store";
import {NotFoundAds, NOT_FOUND_PAGE_PATH} from "src/app/components/not-found/NotFoundAds";
import {AdDetails, AD_PAGE_URL} from "src/app/logic/pages/ad-details/AdDetails";

/**
 * The main component in app
 */
export const App: React.FC = () => {
  return (
    <AdProvider>
      <Router>
        <Routes>
          <Route path={MAIN_PAGE_PATH} element={<AdsPage />} />
          <Route path={AD_PAGE_URL} element={<AdDetails />} />
          <Route path={NOT_FOUND_PAGE_PATH} element={<NotFoundAds />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </AdProvider>
  );
};
