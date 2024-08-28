import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Employee from "./Employee";
import Store from "./Store";

@Entity()
class Phone {

  @PrimaryGeneratedColumn()
  private readonly id!: number;
  
  @ManyToOne(() => Employee, employee => employee.getAddresses())
  private employee?: Employee | null;
  
  @ManyToOne(()=> Store, store => store.getPhones())
  private store?: Store | null;

  @Column()
  private number: string;
  
  @Column()
  private code: string;
  
  @Column()
  private isPrimary: boolean;

  constructor(
    number: string,
    code: string,
    isPrimary: boolean,

  ) {
    this.number = number;
    this.code = code;
    this.isPrimary = isPrimary;

  }

  getId(): number {
    return this.id;
  }

  setNumber(number: string): void {
    this.number = number;
  }

  getNumber(): string {
    return this.number;
  }

  setCode(code: string): void {
    this.code = code;
  }

  getCode(): string {
    return this.code;
  }

  setIsPrimary(isPrimary: boolean): void {
    this.isPrimary = isPrimary;
  }

  getIsPrimary(): boolean {
    return this.isPrimary;
  }

  toString(): string {
    return `${this.code} ${this.number}`;
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

export default Phone;
