import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Loader} from "src/app/components/loader/Loader";
import {NOT_FOUND_PAGE_PATH} from "src/app/components/not-found/NotFoundAds";
import {AdData} from "src/app/logic/store/Store";
import styled from "styled-components";

export const AD_PAGE_URL = "/ad/:adId";

const ContaineLoad = styled.div`
  position: relative;
  display: block;
  width: 100vw;
  height: 100vh;
  display: felx;
  align-items: center;
  justify-content: center;
`;
const Container = styled.section`
  display: flex;
  row-gap: 20px;
  margin-top: 150px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  & div {
    max-width: 450px;
  }
`;

/**
 * Ad details page component
 */
export const AdDetails: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/typedef
  const {adId} = useParams();
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ad, setAd] = useState<[] | AdData[]>([]);

  // Receive ads on demand
  async function getAds(): Promise<AdData[]> {
    try {
      const url = `https://testguru.ru/frontend-test/api/v1/items/${adId}`;
      const response = await axios.get<AdData>(url);

      if (response.data.detail === "Item not found") {
        navigation(NOT_FOUND_PAGE_PATH);
      }

      return [response.data];
    } catch (err) {
      setLoading(false);

      return [];
    }
  }

  // Adding received ads to the state and hide loader
  useEffect(() => {
    if (loading) {
      (async () => {
        const adData = await getAds();
        setAd(adData);
        setLoading(false);
      })();
    }
  }, [loading]);

  // eslint-disable-next-line no-console
  console.log(ad[0]);

  if (loading) {
    return (
      <ContaineLoad>
        <Loader />
      </ContaineLoad>
    );
  }

  return (
    <Container>
      <div>{`Название: ${ad[0]?.title}`}</div>
      <div>{`Цена: ${ad[0]?.price}`}</div>
      <div>{`Город: ${ad[0]?.address}`}</div>
      <div>{`Описание: ${ad[0]?.about}`}</div>
    </Container>
  );
};
