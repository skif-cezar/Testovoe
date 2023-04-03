import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {AdContext, StoreInterface, AdData} from "src/app/logic/store/Store";
import styled from "styled-components";
import {Button} from "src/app/components/buttons/Button";
import {Navigation} from "src/app/components/navigation/Navigation";
import {animateScroll as scroll} from "react-scroll";
import {TopButton} from "src/app/components/buttons/TopButton";
import {Loader} from "src/app/components/loader/Loader";
import {ErrorMessage} from "src/app/components/error/ErrorMessage";
import {useNavigate} from "react-router-dom";
import {NOT_FOUND_PAGE_PATH} from "src/app/components/not-found/NotFoundAds";
import {AdsContainer} from "src/app/components/container-ads/AdsContainer";

/**
 * Path ads page
 */
export const MAIN_PAGE_PATH = "/";

type AdsPageData = {
  items: [];
  total: number;
  page: number;
  size: number;
  pages: number;
};

const Wrapper = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 35px 35px 31px 35px;
`;
const MoreButton = styled.div`
  margin-top: 31px;
  text-align: center;
`;

/**
 * AdsPage component
 */
export const AdsPage: React.FC = () => {
  const adContext: StoreInterface = useContext(AdContext);
  const navigation = useNavigate();
  const [toTopButton, setToTopButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [error, setError] = useState(false);

  // Receive ads on demand
  async function getAds(): Promise<AdData[]> {
    try {
      const url = `https://testguru.ru/frontend-test/api/v1/items?page=${currentPage}`;
      const response = await axios.get<AdsPageData>(url);
      setCurrentPage((prevState: number) => {return prevState + 1;});
      setAllPage(response.data.pages);
      setError(false);

      if(response.data.items.length === 0) {
        navigation(NOT_FOUND_PAGE_PATH);
      }

      return [...adContext.ads, ...response.data.items];
    } catch (err) {
      setError(true);
      adContext.setLoading(false);

      return [];
    }
  }

  // Adding received ads to the state and hide loader
  useEffect(() => {
    if (adContext.loading) {
      (async () => {
        const adsData = await getAds();
        adContext.setAds(adsData);
        adContext.setLoading(false);
      })();
    }
  }, [adContext.loading]);

  // Show more ads
  const showMoreAds = (): void => {
    adContext.setLoading(true);
  };

  // Show button when scrolling page by 100px
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setToTopButton(true);
      } else {
        setToTopButton(false);
      }
    });
  }, [toTopButton]);

  // Page scroll up
  const scrollUp = (): void => {
    return scroll.scrollToTop();
  };

  return (
    <Wrapper>
      <Navigation />
      <AdsContainer />

      {(currentPage <= allPage) && (
        <MoreButton>
          {adContext.loading ? (<Loader />) : (
            <Button
              text="Показать еще" onClick={() => {
                return showMoreAds();
              }}
            />
          )}
          {error && (<ErrorMessage onClick={showMoreAds} />)}
        </MoreButton>
      )}

      {toTopButton && (
        <TopButton
          text="Вверх"
          onClick={() => {
            return scrollUp();
          }}
        />
      )}
    </Wrapper>
  );
};
