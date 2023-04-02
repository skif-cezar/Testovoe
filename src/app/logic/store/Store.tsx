import {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState} from "react";
import useLocalStorageState from "use-local-storage-state";

export type AdData = {
  id: string;
  seen: boolean;
  price: number;
  title: string;
  address: string;
  about: string;
  createdAt: string;
};

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

  /**
   * Content display view
   */
  ads: AdData[];

  /**
   * Set content display view
   */
  setAds: Dispatch<SetStateAction<AdData[]>>;

  /**
   * Content display view
   */
  loading: boolean;

  /**
   * Set content display view
   */
  setLoading: Dispatch<SetStateAction<boolean>>;
}

/**
 * Store for an Ad store
 */
export const useAdStore = (): StoreInterface => {
  const [view, setView] = useLocalStorageState("view", {defaultValue: true});
  const [ads, setAds] = useState<[] | AdData[]>([]);
  const [loading, setLoading] = useState(true);

  return {
    view,
    setView,
    ads, setAds,
    loading, setLoading,
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
