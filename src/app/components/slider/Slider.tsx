/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable react/no-array-index-key */
import React, {useContext} from "react";
import {AdContext, StoreInterface} from "src/app/logic/store/Store";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, {Pagination} from "swiper";
import "./swiper.css";

import img1 from "src/resources/img-1.jpg";
import img2 from "src/resources/img-2.jpg";
import img3 from "src/resources/img-3.jpg";
import img4 from "src/resources/img-4.jpg";

SwiperCore.use([Pagination]);

/**
 * Slider component
 */
export const Slider: React.FC = () => {
  const adContext: StoreInterface = useContext(AdContext);
  const imgSrcArray = [img1, img2, img3, img4];

  return (
    <Swiper
      spaceBetween={30} pagination={{clickable: true}}
      className={adContext.view ? "swiperContainerTile" : "swiperContainerList"}
    >
      {imgSrcArray.map((src, index) => {
        return (
          <SwiperSlide key={index}>
            <picture>
              <img alt={`Изображение-${index}`} src={src} />
            </picture>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
