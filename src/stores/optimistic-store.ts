import {observable} from "mobx";
import OptimisticItem from "./models/optimistic-item";

class OptimisticStore {
    @observable
    item: OptimisticItem;

    constructor() {
        this.item = new OptimisticItem('Test Name!');
    }
}

export default OptimisticStore;