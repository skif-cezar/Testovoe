import {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState} from "react";

/**
 * Store interface
 */
export interface StoreInterface {
  /**
   * Content display view
   */
  view: boolean;

  /**
   * Set content display view
   */
  setView: Dispatch<SetStateAction<boolean>>;
}

/**
 * Store for an Ad store
 */
export const useAdStore = (): StoreInterface => {
  const [view, setView] = useState<boolean>(true);

  return {
    view,
    setView,
  };
};

/**
 * Provide access to AdStore
 */
export const AdContext = createContext({} as StoreInterface);

/**
 * Provider for an Ad store
 */
export const AdProvider: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return (
    <AdContext.Provider value={useAdStore()}>{props.children}</AdContext.Provider>
  );
};
