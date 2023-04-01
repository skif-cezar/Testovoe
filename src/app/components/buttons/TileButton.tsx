import styled from "styled-components";
import TileIcon from "src/resources/tile-icon.svg";

/**
 * TileButton component
 */
export const TileButton: React.FC = () => {
  const ButtonComponent = styled.button`
    width: 31px;
    height: 31px;
    background-color: #c7c7c7;
    -webkit-mask-image: url(${TileIcon});
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-image: url(${TileIcon});
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: cover;
    font-size: 0;
    border: none;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: #a4a4a4;
    }
    &:active {
      background-color: #00a0ab;
    }
  `;

  return <ButtonComponent>Вид плитка</ButtonComponent>;
};
