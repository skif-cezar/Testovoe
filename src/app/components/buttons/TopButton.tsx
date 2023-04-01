import styled from "styled-components";
import arrowIcon from "src/resources/arrow-icon.svg";

/**
 * Button props
 */
interface ButtonProps {
  text: string;
}

/**
 * TopButton component
 */
export const TopButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const TopButtonComponent = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 106px;
    height: 50px;
    padding: 17px 19px 17px 18.5px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #8f8f8f;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 30px;
    border: none;
    cursor: pointer;
    &:hover,
    &:focus {
      background: #f8f8f8;
    }
    &:before {
      content: "";
      display: inline-block;
      width: 26px;
      height: 26px;
      background-image: url(${arrowIcon});
      background-position: center;
      background-repeat: no-repeat;
    }
  `;

  return <TopButtonComponent>{props.text}</TopButtonComponent>;
};
