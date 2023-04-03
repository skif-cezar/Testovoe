import ContentLoader from "react-content-loader";
import styled from "styled-components";

const SkeletonContainer = styled.div`
  position: relative;
  max-width: 472px;
  width: 100%;
  height: 134px;
  border-radius: 12px;
  background-color: #f8f8f8;
`;

/**
 * Skeleton list component
 */
export const SkeletonList: React.FC = (props: any) => {
  return (
    <SkeletonContainer>
      <ContentLoader
        speed={2}
        width={472}
        height={134}
        viewBox="0 0 472 134"
        backgroundColor="#EAEAEA"
        foregroundColor="#f5f5f5"
        {...props}
      >
        <rect
          x="0" y="0"
          rx="12" ry="12"
          width="156" height="134"
        />
        <rect
          x="136" y="0"
          rx="0" ry="0"
          width="20" height="134"
        />
        <rect
          x="168" y="10"
          rx="8" ry="8"
          width="256" height="25"
        />
        <rect
          x="432" y="10"
          rx="8" ry="8"
          width="25" height="25"
        />
        <rect
          x="168" y="45"
          rx="8" ry="8"
          width="292" height="16"
        />
        <rect
          x="168" y="69"
          rx="6" ry="6"
          width="116" height="16"
        />
        <rect
          x="168" y="101"
          rx="6" ry="6"
          width="177" height="14"
        />
        <rect
          x="353" y="101"
          rx="6" ry="6"
          width="107" height="14"
        />
      </ContentLoader>
    </SkeletonContainer>
  );
};
