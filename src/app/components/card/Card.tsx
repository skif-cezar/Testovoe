import React, {useContext} from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import likeImg from "src/resources/like-icon.svg";
import {AdContext, StoreInterface, AdData} from "src/app/logic/store/Store";
import {Viewed} from "src/app/components/viewed/Viewed";

/**
 * Card component
 */
export const Card: React.FC<AdData> = (props: AdData) => {
  const adContext: StoreInterface = useContext(AdContext);

  const dateValue = new Date(props.createdAt.match(/^[^ ]+/)![0]);
  const year = dateValue.getFullYear().toString().slice(2);
  const month = (dateValue.getMonth() + 1).toString().padStart(2, "0");
  const day = dateValue.getDate().toString().padStart(2, "0");
  const hour = dateValue.getHours().toString().padStart(2, "0");
  const minutes = dateValue.getMinutes().toString().padStart(2, "0");
  const fullDate = `${day}.${month}.${year}`;
  const fullTime = `${hour}.${minutes}`;
  const [like, setLike] = useLocalStorageState("like", {defaultValue: [""]});

  const onClickLike = (id: string): void => {
    setLike([...like, id]);
  };

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
  const ViewedContainer = styled.div`
    position: absolute;
    top: 11px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  `;
  const ImgContainer = styled.div`
    position: relative;
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
  const FullDate = styled.span`
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: #8f8f8f;
  `;
  const LikeIcon = styled.button`
    display: inline-block;
    width: 20px;
    height: 19px;
    font-size: 0;
    background-color: ${(like.some((id: string) => {return id === props.id;})) ? "#00a0ab" : "#c7c7c7"};
    -webkit-mask-image: url(${likeImg});
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-image: url(${likeImg});
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: cover;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #a4a4a4;
    }
    &:active {
      background-color: #00a0ab;
    }
  `;

  return (
    <CardContainer>
      <ImgContainer>
        {props.seen && (
          <ViewedContainer>
            <Viewed text="Просмотрено" />
          </ViewedContainer>
        )}
        <picture>
          <img src="../s" alt="" />
        </picture>
      </ImgContainer>
      <Information>
        <div>
          <Price>{`${props.price} ₽`}</Price>
          <LikeIcon onClick={() => {return onClickLike(props.id);}}>Понравилось</LikeIcon>
        </div>
        <div>
          <Title>{props.title}</Title>
        </div>
        <div>
          <City>{props.address}</City>
          <FullDate>{`${fullDate}, ${fullTime}`}</FullDate>
        </div>
      </Information>
    </CardContainer>
  );
};
