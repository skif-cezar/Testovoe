import styled from "styled-components";
import arrowIcon from "src/resources/arrow-icon.svg";

/**
 * Button props
 */
interface ButtonProps {
  text: string;

  /**
   * Callback triggered on click
   */
  onClick: () => void;
}

const TopButtonComponent = styled.button`
  position: fixed;
  bottom: 63px;
  right: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 106px;
  height: 50px;
  padding: 17px 19px 17px 18.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
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

/**
 * TopButton component
 */
export const TopButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <TopButtonComponent onClick={props.onClick}>{props.text}</TopButtonComponent>;
};
