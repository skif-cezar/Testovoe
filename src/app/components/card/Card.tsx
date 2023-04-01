import styled from "styled-components";
import likeImg from "src/resources/like-icon.svg";

/**
 * Card component
 */
export const Card: React.FC = () => {
  const CardContainer = styled.div`
    width: 224px;
    height: 364px;
    filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08));
    border-radius: 12px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover,
    &:focus {
      filter: drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.31));
    }
  `;
  const ImgContainer = styled.div`
    width: 224px;
    height: 260px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: #e8e8e8;
  `;
  const Information = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 10px 12px 19px 10px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    font-family: "Ubuntu";
    font-style: normal;
    background: #ffffff;
    color: #2c2c2c;
    & div:first-child,
    & div:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `;
  const Price = styled.span`
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
  `;
  const Title = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  `;
  const City = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #8f8f8f;
  `;
  const Date = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #8f8f8f;
  `;
  const LikeIcon = styled.span`
    display: inline-block;
    width: 20px;
    height: 19px;
    font-size: 0;
    background-color: #c7c7c7;
    -webkit-mask-image: url(${likeImg});
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-image: url(${likeImg});
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: cover;
    &:hover,
    &:focus {
      background-color: #a4a4a4;
    }
    &:active {
      background-color: #00a0ab;
    }
  `;

  return (
    <CardContainer>
      <ImgContainer>
        <picture>
          <img src="../s" alt="" />
        </picture>
      </ImgContainer>
      <Information>
        <div>
          <Price>0 000 ₽</Price>
          <LikeIcon>Понравилось</LikeIcon>
        </div>
        <div>
          <Title>Название товарной позиции</Title>
        </div>
        <div>
          <City>Город </City>
          <Date>00.00.00, 00.00</Date>
        </div>
      </Information>
    </CardContainer>
  );
};
