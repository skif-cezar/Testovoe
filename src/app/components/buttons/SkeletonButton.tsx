import ContentLoader from "react-content-loader";
import styled from "styled-components";

const ButtonComponent = styled.div`
  width: 125px;
  height: 32px;
  background: #eaeaea;
  border-radius: 45px;
`;

/**
 * Skeleton button component
 */
export const SkeletonButton: React.FC = (props: any) => {
  return (
    <ButtonComponent>
      <ContentLoader
        speed={2}
        width={125}
        height={32}
        viewBox="0 0 125 32"
        backgroundColor="#EAEAEA"
        foregroundColor="#f5f5f5"
        {...props}
      >
        <rect
          x="0" y="0"
          rx="20" ry="20"
          width="125" height="32"
        />
      </ContentLoader>
    </ButtonComponent>
  );
};
