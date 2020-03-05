import {addActions, addComputations} from "mobx-easy";
import {baseStoreActions, baseStoreComputations} from "./base";
import {observable} from "mobx";

interface BaseStore<T> {
    getAll: T[];
    add: (item: T) => void;
    remove: (item: number) => void;
    filterGroup: (filterFn: (item: T) => boolean) => T[]
}

@addComputations(baseStoreComputations)
@addActions(baseStoreActions)
class BaseStore<T> {
    @observable.shallow
    items: Map<number, T> = new Map();
}

export default BaseStore;