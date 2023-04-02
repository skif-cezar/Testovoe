import styled, {keyframes} from "styled-components";
import Spiner from "src/resources/spiner-icon.svg";

const rotation = keyframes`
	0% {
    transform: rotate(0deg);
  	}
  	100% {
    transform: rotate(360deg);
  	}
`;

const Spin = styled.span`
  display: inline-block;
  width: 33.41px;
  height: 33.41px;
  font-size: 0;
  background-image: url(${Spiner});
  animation: ${rotation} 1s linear infinite;
`;

/**
 * Loader component
 */
export const Loader: React.FC = () => {
  return <Spin>Загрузка...</Spin>;
};
