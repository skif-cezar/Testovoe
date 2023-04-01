import styled from "styled-components";

/**
 * Button props
 */
interface ButtonProps {
  text: string;
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const ButtonComponent = styled.button`
    height: 32px;
    padding: 8px 15px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #00a0ab;
    background: #ffffff;
    border-radius: 45px;
    border: none;
    cursor: pointer;
    &:hover,
    &:focus {
      background: #f8f8f8;
    }
  `;

  return <ButtonComponent>{props.text}</ButtonComponent>;
};