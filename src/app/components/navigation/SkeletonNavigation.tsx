import ContentLoader from "react-content-loader";
import styled from "styled-components";

const SkeletonContainer = styled.nav`
  margin-top: -4px;
  margin-left: 3px;
  width: 84px;
  height: 39px;
`;

/**
 * Skeleton navigation component
 */
export const SkeletonNavigation: React.FC = (props: any) => {
  return (
    <SkeletonContainer>
      <ContentLoader
        speed={2}
        width={84}
        height={39}
        viewBox="0 0 84 39"
        backgroundColor="#EAEAEA"
        foregroundColor="#f5f5f5"
        {...props}
      >
        <rect
          x="0" y="0"
          rx="8" ry="8"
          width="84" height="39"
        />
      </ContentLoader>
    </SkeletonContainer>
  );
};
