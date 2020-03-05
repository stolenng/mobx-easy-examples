type BaseStore<T> = {
    items: Map<number, T>;
}

type EntityId = {
    id: number
}

const baseStoreActions = <T extends EntityId>(self: BaseStore<T>) => ({
    add: (item: T) => {
        self.items.set(item.id, item);
    },
    remove(id: number) {
        self.items.delete(id);
    }
});

const baseStoreComputations = <T extends EntityId>(self: BaseStore<T>) => ({
   getAll: () => {
       return Array.from(self.items.values());
   },
    filterGroup: (filterFn: (item: T) => boolean) => {
       return Array.from(self.items.values()).filter(filterFn);
    }
});

export {
    baseStoreActions,
    baseStoreComputations
}