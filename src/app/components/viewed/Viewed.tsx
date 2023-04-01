import styled from "styled-components";

/**
 * Viewed props
 */
interface ViewedProps {
  text: string;
}

/**
 * Viewed component
 */
export const Viewed: React.FC<ViewedProps> = (props: ViewedProps) => {
  const ViewedComponent = styled.span`
    display: inline-block;
    width: 94px;
    height: 24px;
    padding: 5px 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #2c2c2c;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-sizing: border-box;
  `;

  return <ViewedComponent>{props.text}</ViewedComponent>;
};
