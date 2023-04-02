import {Card} from "src/app/components/card/Card";
import styled from "styled-components";
import {Button} from "src/app/components/buttons/Button";
import {Navigation} from "src/app/components/navigation/Navigation";

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
      <Navigation />
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
