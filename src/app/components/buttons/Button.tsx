import styled from "styled-components";

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

const ButtonComponent = styled.button`
  height: 32px;
  padding: 8px 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
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

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <ButtonComponent onClick={props.onClick}>{props.text}</ButtonComponent>;
};
