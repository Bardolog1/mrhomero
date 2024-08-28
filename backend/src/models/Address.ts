import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Employee from './Employee';
import Store from './Store';

@Entity()    
class Address  {

  @PrimaryGeneratedColumn("uuid")
  private id!: number;
  
  @ManyToOne(() => Employee, employee => employee.getAddresses())
  private employee?: Employee | null;
  
  
  @OneToOne(() => Store, store => store.getAddresses())
  private store?: Store | null;
  
  
  @Column()
  private street: string;

  @Column()
  private number: number;

  @Column()
  private city: string;

  @Column()
  private state: string;

  @Column()
  private country: string;

  @Column()
  private postalCode: string;

  constructor(country: string, state : string,  city: string,street: string, number: number, postalCode: string) {
    this.street = street;
    this.city = city;
    this.country = country;

    this.number = number;
    this.state = state;
    this.postalCode = postalCode;
    
}

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
  
  setEmployee(employee: Employee): void {
    this.employee = employee;
  }
  
  getEmployee(): Employee | null {
    return this.employee? this.employee : null;
  }
  
  setStore(store: Store): void {
    this.store = store;
  }
  
  getStore(): Store | null {
    return this.store? this.store : null;
  }

}

export default Address;
