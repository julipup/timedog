import { writable } from "svelte/store";

class StoreClass {
    public subscribe;
    private _update;

    constructor() {
        const { subscribe, update } = writable<number>(0);
    
        this.subscribe = subscribe;
        this._update = update;
    };

    public increment() {
        this._update((object) => {
            object++;
            return object;
        });
    };
};

export const Test = new StoreClass();