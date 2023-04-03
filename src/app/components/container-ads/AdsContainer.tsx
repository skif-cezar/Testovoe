/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable react/no-array-index-key */
import {useContext} from "react";
import {AdContext, StoreInterface, AdData} from "src/app/logic/store/Store";
import {Card} from "src/app/components/card/Card";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {SkeletonTile} from "../card/SkeletonTile";
import {SkeletonList} from "../card/SkeletonList";

const Container = styled.section`
  display: flex;
  gap: 24px;
  max-width: 968px;
  width: 100%;
  margin: 22px auto 0px auto;
  flex-wrap: wrap;
  justify-content: center;
  &::after {
    content: "";
    flex: auto;
  }
`;

/**
 * Ads container component
 */
export const AdsContainer: React.FC = () => {
  const adContext: StoreInterface = useContext(AdContext);
  const rowSkeletons = 20;

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
