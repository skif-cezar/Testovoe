import {Button} from "src/app/components/buttons/Button";
import styled from "styled-components";

/**
 * ErrorMessage props
 */
interface ErrorMessageProps {
  /**
   * Callback triggered on click
   */
  onClick: () => void;
}

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.0625rem;
  text-align: center;
  color: #8f8f8f;
`;

/**
 * Error message component
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = (props: ErrorMessageProps) => {
  return (
    <MessageContainer>
      <Text>Ошибка при загрузке</Text>
      <Button text="Повторить попытку" onClick={props.onClick} />
    </MessageContainer>
  );
};
