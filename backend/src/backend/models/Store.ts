import Address from "./Address";
import Manager from "./Manager";
import Phone from "./Phone";

class Store {
    constructor(
        public readonly id: string,
        public name: string,
        public address: Address,
        public phone: Phone,
        public email: string,
        private manager: Manager
    ) {}

    setManager(manager: Manager): void {
        this.manager = manager;
    }

    getManager(): Manager {
        return this.manager;
    }

    toString(): string {
        return `${this.name} - ${this.address.city}, ${this.address.state}`;
    }
}

export default Store;
