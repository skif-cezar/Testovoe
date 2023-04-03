import {useContext} from "react";
import {ListButton} from "src/app/components/buttons/ListButton";
import {TileButton} from "src/app/components/buttons/TileButton";
import {AdContext, StoreInterface} from "src/app/logic/store/Store";
import styled from "styled-components";
import {SkeletonNavigation} from "./SkeletonNavigation";

const NavigationContainer = styled.nav`
  margin-top: -4px;
  height: 39px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const ViewButtons = styled.ul`
  display: flex;
  column-gap: 16px;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

/**
 * Navigation component. Buttons for selecting the view of display of ads
 */
export const Navigation: React.FC = () => {
  const adContext: StoreInterface = useContext(AdContext);

  const onClick = (userChoice: boolean): void => {
    adContext.setView(userChoice);
  };

  if (adContext.loading) {
    return (
      <NavigationContainer>
        <SkeletonNavigation />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <ViewButtons>
        <li>
          <TileButton
            onClick={() => {
              return onClick(true);
            }}
          />
        </li>
        <li>
          <ListButton
            onClick={() => {
              return onClick(false);
            }}
          />
        </li>
      </ViewButtons>
    </NavigationContainer>
  );
};