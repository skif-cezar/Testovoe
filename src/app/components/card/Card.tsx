import React, {useContext} from "react";
import styled from "styled-components";
import likeImg from "src/resources/like-icon.svg";
import {AdContext, StoreInterface} from "src/app/logic/store/Store";

/**
 * Card component
 */
export const Card: React.FC = () => {
  const adContext: StoreInterface = useContext(AdContext);

  const CardContainer = styled.div`
    display: flex;
    flex-direction: ${adContext.view ? "column" : "row"};
    max-width: ${adContext.view ? "224px" : "472px"};
    width: 100%;
    height: ${adContext.view ? "364px" : "134px"};
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
    flex-shrink: 0;
    width: ${adContext.view ? "224px" : "156px"};
    height: ${adContext.view ? "260px" : "134px"};
    border-top-left-radius: 12px;
    border-top-right-radius: ${adContext.view ? "12px" : "0px"};
    border-bottom-left-radius: ${adContext.view ? "0px" : "12px"};
    background: #e8e8e8;
  `;
  const Information = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: ${adContext.view ? "10px 12px 19px 10px" : "10px 12px 19px 12px"};
    border-top-right-radius: ${adContext.view ? "0px" : "12px"};
    border-bottom-left-radius: ${adContext.view ? "12px" : "0px"};
    border-bottom-right-radius: 12px;
    font-family: "Ubuntu";
    font-style: normal;
    background: #ffffff;
    color: #2c2c2c;
    box-sizing: border-box;
    & div:first-child,
    & div:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    & div:nth-child(3) {
      margin-top: ${adContext.view ? "0px" : "30px"};
    }
  `;
  const Price = styled.span`
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 1.5625rem;
  `;
  const Title = styled.span`
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
  `;
  const City = styled.span`
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: #8f8f8f;
  `;
  const Date = styled.span`
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.875rem;
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
