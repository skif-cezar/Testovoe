/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable react/no-array-index-key */
import {useContext} from "react";
import {AdContext, StoreInterface, AdData} from "src/app/logic/store/Store";
import {Card} from "src/app/components/card/Card";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {SkeletonTile} from "../card/SkeletonTile";
import {SkeletonList} from "../card/SkeletonList";

/**
 * Ads container component
 */
export const AdsContainer: React.FC = () => {
  const adContext: StoreInterface = useContext(AdContext);
  const rowSkeletons = 20;

  const Container = styled.section`
    display: grid;
    grid-template-columns: ${adContext.view ? "repeat(auto-fill, 224px)" : "repeat(auto-fill, minmax(280px, 472px))"};
    width: 100%;
    max-width: 968px;
    justify-content: center;
    gap: 24px;
    margin: 22px auto 0px auto;

    @media(max-width: 540px) {
      grid-template-columns: repeat(auto-fill, 224px);
    }
  `;

  if (adContext.loading) {
    if (adContext.view) {
      return (
        <Container>
          {[...new Array(rowSkeletons)].map((_, index) => {
            return <SkeletonTile key={index} />;
          })}
        </Container>
      );
    }

    return (
      <Container>
        {[...new Array(rowSkeletons)].map((_, index) => {
          return <SkeletonList key={index} />;
        })}
      </Container>
    );
  }

  return (
    <Container>
      {adContext.ads &&
        adContext.ads.map((ad: AdData) => {
          return (
            <NavLink to={`/ad/${ad.id}`} key={ad.id}>
              <Card
                id={ad.id}
                seen={ad.seen}
                price={ad.price}
                title={ad.title}
                address={ad.address}
                about={ad.about}
                createdAt={ad.createdAt}
              />
            </NavLink>
          );
        })}
    </Container>
  );
};
