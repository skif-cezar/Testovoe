import React, {useContext} from "react";
import styled from "styled-components";
import likeImg from "src/resources/like-icon.svg";
import {AdContext, StoreInterface, AdData} from "src/app/logic/store/Store";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  /* const dateValue = new Date(props.createdAt);
  const year = dateValue.getFullYear().toString().slice(2);
  const month = (dateValue.getMonth() + 1).toString().padStart(2, "0");
  const day = dateValue.getDate().toString().padStart(2, "0");
  const fullDate = `${day}.${month}.${year}`;
  const fullTime = new Date(props.createdAt.match(/^[^ ]+/)![0]); */

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
  const FullDate = styled.span`
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

  if (adContext.loading) {
    const rows = [];
    const rowSkeletons = 20;

    for (let index = 0; index < rowSkeletons; index += 1) {
      rows.push(
        <CardContainer>
          <ImgContainer>
            <Skeleton
              width={adContext.view ? "224" : "156"}
              height={adContext.view ? "260" : "134"}
            />
          </ImgContainer>
          <Information>
            <div>
              <Skeleton width={adContext.view ? "166" : "256"} height={25} />
              <Skeleton width={25} height={25} />
            </div>
            <div>
              <Skeleton width={adContext.view ? "200" : "292"} height={16} />
            </div>
            {adContext.view && (
              <div>
                <Skeleton width={200} height={14} />
              </div>
            )}
            {!adContext.view && (
              <div>
                <Skeleton width={177} height={14} />
                <Skeleton width={107} height={14} />
              </div>
            )}
          </Information>
        </CardContainer>,
      );
    }

    /* return (
      <SkeletonTheme color="#F5F5F5" highlightColor="#ffffff">
        <GalleryStyles className="gallery__grid">
          <h2 className="gallery__title">
            <Skeleton />
          </h2>
          <div className="gallery__grid">{rows}</div>
        </GalleryStyles>
      </SkeletonTheme>
    ); */
  }

  return (
    <CardContainer>
      <ImgContainer>
        <picture>
          <img src="../s" alt="" />
        </picture>
      </ImgContainer>
      <Information>
        <div>
          <Price>{`${props.price} ₽`}</Price>
          <LikeIcon>Понравилось</LikeIcon>
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
