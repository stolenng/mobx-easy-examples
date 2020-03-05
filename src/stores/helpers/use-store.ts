import { StoreContext } from './store-provider';
import {useContext} from "react";
import RootStore from "../root-store";

export const useStore = <T>(mapperFn?: (rootStore: RootStore) => T): RootStore | T => {
    const rootStore = useContext(StoreContext);

    return mapperFn ? mapperFn(rootStore) : rootStore;
};