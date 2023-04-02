import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {AdContext, StoreInterface, AdData} from "src/app/logic/store/Store";
import {Card} from "src/app/components/card/Card";
import styled from "styled-components";
import {Button} from "src/app/components/buttons/Button";
import {Navigation} from "src/app/components/navigation/Navigation";
import {animateScroll as scroll} from "react-scroll";
import {TopButton} from "src/app/components/buttons/TopButton";

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
const AdsContainer = styled.section`
  display: flex;
  gap: 24px;
  max-width: 968px;
  width: 100%;
  margin: 26px auto 0px auto;
  flex-wrap: wrap;
  justify-content: center;
  &::after {
    content: "";
    flex: auto;
  }
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
  const [toTopButton, setToTopButton] = useState(false);

  // const rowSkeletons = 20;

  // Receive ads on demand
  async function getAds(): Promise<AdData[]> {
    // try {
    const url = "https://testguru.ru/frontend-test/api/v1/items?page=2";
    const response = await axios.get<AdsPageData>(url);
    return response.data.items;
    // } catch (err) {
    //   console.log(err);
    //   return [];
    // }
  }

  // Adding received ads to the state and hide loader
  useEffect(() => {
    (async () => {
      const adsData = await getAds();
      adContext.setAds(adsData);
      adContext.setLoading(false);
    })();
  }, []);

  // eslint-disable-next-line no-console
  console.log(adContext.loading);

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
      <AdsContainer>
        {adContext.ads &&
          adContext.ads.map((ad: AdData) => {
            return (
              <Card
                key={ad.id}
                id={ad.id}
                seen={ad.seen}
                price={ad.price}
                title={ad.title}
                address={ad.address}
                about={ad.about}
                createdAt={ad.createdAt}
              />
            );
          })}
      </AdsContainer>
      <MoreButton>
        <Button text="Показать еще" />
      </MoreButton>
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
