import { Entity, Column, OneToMany } from "typeorm";
import Person from "./Person";
import Address from "./Address";
import Permission from "./Permission";
import Phone from "./Phone";
import { DocumentType } from "./DocumentType";

@Entity("employees")
class Employee extends Person {

  @Column()
  protected employeeId: string = "";

  @Column()
  protected role: string;

  @Column()
  protected department: string;

  @Column()
  protected salary: number;

  @Column()
  protected hireDate: Date = new Date();

  @Column()
  protected status: boolean = false;



  @OneToMany(() => Address, (address) => address.getEmployee())
  protected addresses!: Address[];

  @OneToMany(() => Permission, (permission) => permission.getEmployee())
  protected permissions!: Permission[];
  
  @OneToMany(() => Phone, (phone) => phone.getEmployee())
  protected phones!: Phone[];
  
  

  constructor(
    personalIdType: DocumentType,
    personalId: string,
    name: string,
    lastName: string,
    age: number,
    email: string,
    role: string,
    department: string,
    salary: number,
    birthDate: Date
  ) {
    super(personalIdType, personalId, name, lastName, age, email, birthDate);
    this.role = role;
    this.department = department;
    this.salary = salary;
    this.employeeId = this.generateEmployeeId();
  }

  private generateEmployeeId(): string {
    const template = "EMP-";
    return template + Math.random().toString(36).substr(2, 9);
  }

  setRole(role: string): void {
    this.role = role;
  }

  getRole(): string {
    return this.role;
  }

  setDepartment(department: string): void {
    this.department = department;
  }

  getDepartment(): string {
    return this.department;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }

  getInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Employee ID: ${this.employeeId}`);
    console.log(`Role: ${this.role}`);
    console.log(`Department: ${this.department}`);
    console.log(`Salary: ${this.salary}`);
    console.log(`Hire Date: ${this.hireDate}`);
    console.log(`Status: ${this.status}`);
    console.log(`Personal ID Type: ${this.personalIdType}`);
    console.log(`Personal ID: ${this.personalId}`);
    console.log(`Name: ${this.name}`);
    console.log(`Last Name: ${this.lastName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
    console.log(`Birth Date: ${this.birthDate}`);
    console.log(`Created At: ${this.createdAt}`);
  }

  getHireDate(): Date {
    return this.hireDate;
  }

  setHireDate(date: Date): void {
    this.hireDate = date;
  }

  getStatus(): boolean {
    return this.status;
  }

  setStatus(status: boolean): void {
    this.status = status;
  }
  
  
  setAddresses(addresses: Address[]): void {
    this.addresses = addresses;
  }
  
    getAddresses(): Address[]  {
        return this.addresses;
    }
    
    setPermissions(permissions: Permission[]): void {
        this.permissions = permissions;
    }
    
    getPermissions(): Permission[] {
        return this.permissions;
    }
}

export default Employee;
