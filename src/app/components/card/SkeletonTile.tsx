import ContentLoader from "react-content-loader";
import styled from "styled-components";

const SkeletonContainer = styled.div`
  position: relative;
  max-width: 224px;
  width: 100%;
  height: 364px;
  border-radius: 12px;
  background-color: #f8f8f8;
`;

/**
 * Skeleton tile component
 */
export const SkeletonTile: React.FC = (props: any) => {
  return (
    <SkeletonContainer>
      <ContentLoader
        speed={2}
        width={224}
        height={364}
        viewBox="0 0 224 364"
        backgroundColor="#EAEAEA"
        foregroundColor="#f5f5f5"
        {...props}
      >
        <rect
          x="0" y="0"
          rx="12" ry="12"
          width="224" height="260"
        />
        <rect
          x="0" y="240"
          rx="0" ry="0"
          width="224" height="20"
        />
        <rect
          x="12" y="270"
          rx="8" ry="8"
          width="166" height="25"
        />
        <rect
          x="187" y="270"
          rx="8" ry="8"
          width="25" height="25"
        />
        <rect
          x="12" y="305"
          rx="6" ry="6"
          width="200" height="16"
        />
        <rect
          x="12" y="331"
          rx="6" ry="6"
          width="200" height="14"
        />
      </ContentLoader>
    </SkeletonContainer>
  );
};
