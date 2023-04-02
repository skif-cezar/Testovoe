import styled from "styled-components";

/**
 * NotFoundAds component
 */
export const NotFoundAds: React.FC = () => {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    row-gap: 9px;
    max-width: 246px;
    width: 100%;
  `;

  const Title = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 0.953rem;
    line-height: 1.1875rem;
    text-align: center;
    text-transform: uppercase;
    color: #00a0ab;
  `;

  const Text = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.0625rem;
    text-align: center;
    color: #8f8f8f;
  `;

  return (
    <Container>
      <Title>ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</Title>
      <Text>
        Простите, по вашему запросу товаров сейчас нет. Задайте запрос по-другому или измените
        характеристики
      </Text>
    </Container>
  );
};
