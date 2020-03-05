import {observable} from "mobx";

class User {
    id: number;

    @observable
    name: string;

    @observable
    laseName: string;

    constructor(firstName: string, lastName: string) {
        this.id = Date.now();
        this.name = firstName;
        this.laseName = lastName;
    }
}

export default User;