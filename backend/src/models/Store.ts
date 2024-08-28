import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Address from "./Address";
import Manager from "./Manager";
import Phone from "./Phone";


@Entity()
class Store {
    
    @PrimaryGeneratedColumn("uuid")
    private readonly id!: string;
    
    @ManyToOne(() => Manager, (manager) => manager.getStores())
    private managers!: Manager[]; 
    
    @OneToOne(() => Address, (address) => address.getStore())
    private address!: Address;
    
    @OneToMany(() => Phone, (phone) => phone.getStore())
    private phones!: Phone[];
    
    @Column()
    private name: string;
    
    @Column()
    private email: string;

    
    constructor(
        name: string,
        address: Address,
        phones: Phone[],
        email: string,
    ) {
        this.name = name;
        this.address = address;
        this.phones = phones;
        this.email = email;
    }

    setManagers(managers: Manager[]): void {
        this.managers = managers;
    }

    getManagers(): Manager[] {
        return this.managers;
    }
    
    getId(): string {
        return this.id;
    }
    
    setName(name: string): void {
        this.name = name;
    }
    
    getName(): string {
        return this.name;
    }
    
    setAddress(address: Address): void {
        this.address = address;
    }
    
    getAddress(): Address {
        return this.address;
    }
    
    setPhones(phones: Phone[]): void {
        this.phones = phones;
    }
    
    getPhones(): Phone[] {
        return this.phones;
    }
    
    setEmail(email: string): void {
        this.email = email;
    }
    
    getEmail(): string {
        return this.email;
    }
    
    setAddresses(address: Address): void {
        this.address = address;
    }
    
    getAddresses(): Address {
        return this.address;
    }

    toString(): string {
        return `${this.name} - ${this.address.getCity}, ${this.address.getCountry}`;
    }
    
    
}

export default Store;
