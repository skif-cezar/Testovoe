import styled from "styled-components";

/**
 * Viewed props
 */
interface ViewedProps {
  text: string;
}

const ViewedComponent = styled.span`
  display: inline-block;
  width: 94px;
  height: 24px;
  padding: 5px 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.875rem;
  text-align: center;
  color: #2c2c2c;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-sizing: border-box;
`;

/**
 * Viewed component. Appears on the card of ads that have been viewed
 */
export const Viewed: React.FC<ViewedProps> = (props: ViewedProps) => {
  return <ViewedComponent>{props.text}</ViewedComponent>;
};
