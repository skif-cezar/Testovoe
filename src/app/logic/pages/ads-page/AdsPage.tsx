import {ListButton} from "src/app/components/buttons/ListButton";
import {TileButton} from "src/app/components/buttons/TileButton";
import {Card} from "src/app/components/card/Card";
import styled from "styled-components";
import {Button} from "src/app/components/buttons/Button";

/**
 * AdsPage component
 */
export const AdsPage: React.FC = () => {
  const Wrapper = styled.div`
    max-width: 1280px;
    width: 100%;
	 margin: 0 auto;
    padding: 35px 35px 31px 35px;
  `;
  const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `;
  const ViewButtons = styled.ul`
    display: flex;
    column-gap: 16px;
    margin: 0px;
    padding: 0px;
    list-style: none;
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

  return (
    <Wrapper>
      <Navigation>
        <ViewButtons>
          <li>
            <TileButton />
          </li>
          <li>
            <ListButton />
          </li>
        </ViewButtons>
      </Navigation>
      <AdsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </AdsContainer>
      <MoreButton>
        <Button text="Показать еще" />
      </MoreButton>
    </Wrapper>
  );
};
