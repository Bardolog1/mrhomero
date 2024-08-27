export interface IAddress {
    id: number;
    street: string;
    number: number;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}

class Address implements IAddress {
    constructor(
        public readonly id: number,
        public street: string,
        public number: number,
        public city: string,
        public state: string,
        public country: string,
        public postalCode: string
    ) {}
    
    

    getId(): number {
        return this.id;
    }

    setStreet(street: string): void {
        this.street = street;
    }

    getStreet(): string {
        return this.street;
    }

    setNumber(number: number): void {
        this.number = number;
    }

    getNumber(): number {
        return this.number;
    }

    setCity(city: string): void {
        this.city = city;
    }

    getCity(): string {
        return this.city;
    }

    setState(state: string): void {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }

    setCountry(country: string): void {
        this.country = country;
    }

    getCountry(): string {
        return this.country;
    }

    setPostalCode(postalCode: string): void {
        this.postalCode = postalCode;
    }

    getPostalCode(): string {
        return this.postalCode;
    }
}

export default Address;